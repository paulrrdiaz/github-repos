import axios from "axios";
import { axiosConfig } from "src/api";

export default async (req, res) => {
  const { q, sort, order } = req.query;

  const { data } = await axios.get(
    `search/repositories?q=${q}&sort=${sort}&order=${order}`,
    axiosConfig
  );

  res.json(data);
};
