import React from "react";
import * as API from "src/api";
import ButtonLink from "src/components/ButtonLink";

const Repo = ({ repo }) => {
  return (
    <div className="wrapper">
      <ButtonLink href="/">Back</ButtonLink>
      <h3 className="title is-3">{repo.name}</h3>
      <ButtonLink href={repo.html_url} external type="dark">
        View on Github
      </ButtonLink>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const response = await API.getRepo(query.id);

  return {
    props: {
      repo: response,
    },
  };
};

export default Repo;
