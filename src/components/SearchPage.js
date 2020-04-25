import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookGrid from "./BookGrid";
import * as BooksAPI from "../BooksAPI";

class SearchPage extends Component {
  state = {
    results: [],
  };

  searchBooks = (query) => {
    if (query === "") query = " ";

    BooksAPI.search(query).then((res) => {
      this.setState({ results: res });
    });
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar onSubmitQuery={this.searchBooks} />

        <div className="search-books-results">
          <BookGrid
            onUpdateBook={this.props.onUpdateBook}
            books={this.state.results}
            allBooks={this.props.allBooks}
            showLoadingText={false}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
