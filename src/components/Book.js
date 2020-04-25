import React, { Component } from "react";

class Book extends Component {
  render() {
    const { book, allBooks, onUpdateBook } = this.props;
    const { title, authors, imageLinks } = book;

    let shelf = "none";
    allBooks.forEach((b) => {
      if (b.id === book.id) {
        shelf = b.shelf;
      }
    });

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${imageLinks && imageLinks.thumbnail})`,
              }}
            />
            <div className="book-shelf-changer">
              <select
                value={shelf}
                onChange={(e) => onUpdateBook(book, e.target.value)}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title && title}</div>

          {authors &&
            authors.map((author) => {
              return (
                <div key={author} className="book-authors">
                  {author}
                </div>
              );
            })}
        </div>
      </li>
    );
  }
}

export default Book;
