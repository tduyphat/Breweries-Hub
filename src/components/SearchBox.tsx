import React from "react";
import SearchBarProps from "../interfaces/SearchBarProps";

const SearchBox : React.FC<SearchBarProps> = ({ handleSearch }) => {
  return (
    <>
      <input
        type="search"
        onChange={(e) => handleSearch(e)}
        placeholder="search brewery"
      />
    </>
  );
};

export default SearchBox;
