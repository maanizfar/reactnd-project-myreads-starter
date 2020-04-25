import React, { Component } from "react";
import BookGrid from "./BookGrid";

class BookShelf extends Component {
  getBooksInShelf = (books, shelf) => {
    return books.filter((book) => {
      return book.shelf === shelf;
    });
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <BookGrid
            books={this.getBooksInShelf(this.props.allBooks, this.props.shelf)}
            allBooks={this.props.allBooks}
            onUpdateBook={this.props.onUpdateBook}
          />
        </div>
      </div>
    );
  }
}

export default BookShelf;
