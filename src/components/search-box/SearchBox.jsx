import React, { Component } from "react";
import "./SearchBox.css";

export class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        className={`search-box ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={this.props.handleFilter}
      />
    );
  }
}

export default SearchBox;
