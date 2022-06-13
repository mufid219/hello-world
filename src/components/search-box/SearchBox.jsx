import React, { Component } from "react";

export class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        className="search-box"
        placeholder="search monsters"
        onChange={this.props.handleFilter}
      />
    );
  }
}

export default SearchBox;
