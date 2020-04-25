import React, { Component } from "react";
import Book from "./Book";

class BookGrid extends Component {
  render() {
    const { books } = this.props;

    return (
      <ol className="books-grid">
        {books !== undefined &&
          books.length === 0 &&
          this.props.showLoadingText !== false && <p>Loading books...</p>}

        {books !== undefined && books.error === "empty query" ? (
          <h2>No books found</h2>
        ) : (
          books.map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                allBooks={this.props.allBooks}
                onUpdateBook={this.props.onUpdateBook}
              />
            );
          })
        )}
      </ol>
    );
  }
}

export default BookGrid;
