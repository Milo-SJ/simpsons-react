import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    const { onCharacterSearch } = this.props;
    return (
      <>
        <label htmlFor="search"></label>
        <input
          onInput={onCharacterSearch}
          type="text"
          id="search"
          placeholder="Character Search"
        />
      </>
    );
  }
}

export default Search;
