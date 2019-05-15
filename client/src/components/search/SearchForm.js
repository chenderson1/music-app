import React from "react";

const SearchForm = props => {
  return (
    <form>
      <input
        name="searchText"
        type="text"
        placeholder="search"
        value={props.searchText}
        onChange={props.handleChange}
      />
      <button onClick={props.getSearchTracks}>Search</button>
    </form>
  );
};

export default SearchForm;
