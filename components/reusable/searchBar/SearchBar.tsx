import SearchIcon from "@/assets/icons/SearchIcon";
import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="search-bar">
      <SearchIcon width={"18px"} height={"18px"} stroke={"gray"} fill={"#fff"} />
      <input type="search" placeholder="Search..."/>
    </div>
  );
};

export default SearchBar;
