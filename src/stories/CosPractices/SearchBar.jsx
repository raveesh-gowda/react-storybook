import React from "react";
import PropTypes from "prop-types";

export const SearchBar = ({
  searchText,
  onSearchTextChange,
  onSearchIconClick,
}) => {
  return (
    <div className="prn-icon-addon">
      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
          onSearchIconClick();
        }}
      >
        <span className="turn-search" onClick={onSearchIconClick}></span>
        <input
          type="text"
          className="size-medium"
          name="search"
          onChange={(e) => {
            onSearchTextChange(e.target.value);
          }}
          value={searchText}
          placeholder="Search"
          autoComplete="off"
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  onSearchIconClick: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: "",
  onSearchTextChange: () => {},
  onSearchIconClick: () => {},
};
