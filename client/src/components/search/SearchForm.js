import React from "react";
import { StyledSearchForm } from "../../elements/form";

const SearchForm = props => {
  return (
    <StyledSearchForm autocomplete="off">
      <input
        name="searchText"
        type="text"
        placeholder="search"
        value={props.searchText}
        onChange={props.handleChange}
      />
      <button onClick={props.getSearchTracks}>Search</button>
    </StyledSearchForm>
  );
};

export default SearchForm;
