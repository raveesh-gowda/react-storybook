import React from "react";
import { SearchBar as SearchBarComponent } from "./SearchBar";

export default {
  title: "CosPractices/SearchBar",
  component: SearchBarComponent,
};

export const SearchBar = (args) => {
  return <SearchBarComponent {...args} />;
};

SearchBar.args = {
  serachText: "",
  onSearchTextChange: () => {},
  searchIconClick: () => {},
};

SearchBar.storyName = "SearchBar";
