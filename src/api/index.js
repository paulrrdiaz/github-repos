import axios from "axios";
import { isServer } from "src/utils";

export const axiosConfig = {
  baseURL: "https://api.github.com/",
  auth: {
    username: process.env.GITHUB_CLIENT_ID,
    password: process.env.GITHUB_CLIENT_SECRET,
  },
};

const cancelConfig = {
  request: null,
  cancelToken: null,
};

const getCancellable = async (url, config) => {
  if (cancelConfig.request) {
    cancelConfig.request.cancel("canceled");
  }
  cancelConfig.request = axios.CancelToken.source();
  cancelConfig.cancelToken = cancelConfig.request.token;
  Object.assign(cancelConfig, config);

  try {
    const { data } = await axios.get(url, cancelConfig);
    return data;
  } catch (error) {
    if (error.message !== "canceled") {
      throw error;
    }
  }
};

export const searchRepos = async (searchText, language) => {
  const query = language ? `${searchText}+language:${language}` : searchText;

  if (isServer()) {
    return await getCancellable(
      `search/repositories?q=${query}&sort=stars&order=desc`,
      axiosConfig
    );
  }

  return await getCancellable(`api/search?q=${query}&sort=stars&order=desc`);
};
