import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  inputHandler = (e) => {
    this.props.onSubmitQuery(e.target.value);
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => this.inputHandler(e)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
