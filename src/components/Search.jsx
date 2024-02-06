import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    const { onCharacterSearch } = this.props;
    return (
      <>
        <input
          onInput={(e) => onCharacterSearch(e.target.value)}
          type="text"
          id="location-search"
          placeholder="Character Search"
        />
      </>
    );
  }
}

export default Search;
