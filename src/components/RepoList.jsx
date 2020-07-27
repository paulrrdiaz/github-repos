import React from "react";
import RepoListItem from "src/components/RepoListItem";

const RepoList = ({ repos, loading }) => {
  if (loading) {
    return <img className="loader" src="/img/loading.gif" alt="" />;
  }

  if (!repos || !repos.length) {
    return <div className="text-center">No repositories found.</div>;
  }

  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoListItem key={repo.id} {...repo} />
      ))}
    </div>
  );
};

export default RepoList;
