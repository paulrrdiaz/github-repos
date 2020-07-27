import React from "react";
import Input from "src/components/shared/Input";
import Select from "src/components/shared/Select";
import { LANGUAGES } from "src/constants";

const Search = (props) => {
  const { language, searchText, onSearchTextChange, onLanguageChange } = props;

  return (
    <div className="search">
      <Input
        label="Repo search"
        value={searchText}
        onChange={onSearchTextChange}
      />
      <Select
        label="Language"
        value={language}
        onChange={onLanguageChange}
        options={[{ value: "", label: "All" }, ...LANGUAGES]}
      />
    </div>
  );
};

export default Search;
