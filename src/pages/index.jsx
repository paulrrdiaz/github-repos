import React, { useState, useEffect } from "react";
import * as API from "src/api";
import Search from "src/components/Search";
import RepoList from "src/components/RepoList";

const Index = (props) => {
  const [searchText, setSearchText] = useState(props.searchText);
  const [repos, setRepos] = useState(props.repos);
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearchTextChange = (text) => {
    setSearchText(text);
    if (text) {
      loadRepos(text, language);
    }
  };
  const onLanguageChange = (language) => {
    setLanguage(language);
    loadRepos(searchText, language);
  };

  const loadRepos = async (text) => {
    setLoading(true);

    try {
      const response = await API.searchRepos(text, language);
      setLoading(false);
      if (response) {
        setRepos(response.items);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="wrapper">
      <img className="hero" src="/img/developer.svg" alt="" />
      <Search
        searchText={searchText}
        language={language}
        onSearchTextChange={onSearchTextChange}
        onLanguageChange={onLanguageChange}
      />
      <RepoList loading={loading} repos={repos} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const searchText = "react";
  const response = await API.searchRepos(searchText);

  return {
    props: {
      searchText,
      repos: response.items,
    },
  };
};

export default Index;
