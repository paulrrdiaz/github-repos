import React from "react";
import * as API from "src/api";
import ButtonLink from "src/components/ButtonLink";

const Profile = ({ profile }) => {
  return (
    <div className="wrapper">
      <ButtonLink href="/">Back</ButtonLink>
      <h3 className="title is-3">{profile.name}</h3>
      <ButtonLink href={profile.html_url} external type="dark">
        View on Github
      </ButtonLink>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const response = await API.getProfile(query.username);
  return {
    props: {
      profile: response,
    },
  };
};

export default Profile;
