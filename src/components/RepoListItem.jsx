import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch } from "react-icons/fa";
import { limitWords } from "src/utils";

const RepoListItem = ({
  id,
  name,
  description,
  stargazers_count,
  forks_count,
  language,
  owner,
}) => {
  return (
    <div className="repo-list__item box">
      <Link href="/repo/[id]" as={`/repo/${id}`}>
        <a>{name}</a>
      </Link>
      <div className="avatar">
        <img className="image is-rounded" src={owner.avatar_url} alt="" />
        <Link href="/profile/[id]" as={`/profile/${owner.login}`}>
          <a>{owner.login}</a>
        </Link>
      </div>
      <p className="description">{limitWords(description)}</p>
      <div className="details">
        <div>
          <span className="counter">
            <FaStar />
            {stargazers_count}
          </span>
          <span className="counter">
            <FaCodeBranch />
            {forks_count}
          </span>
        </div>
        <div className="language">{language}</div>
      </div>
    </div>
  );
};

export default RepoListItem;
