import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              allBooks={this.props.allBooks}
              title={"Currently Reading"}
              shelf={"currentlyReading"}
              onUpdateBook={this.props.onUpdateBook}
            />
            <BookShelf
              allBooks={this.props.allBooks}
              title={"Want To Read"}
              shelf={"wantToRead"}
              onUpdateBook={this.props.onUpdateBook}
            />
            <BookShelf
              allBooks={this.props.allBooks}
              title={"Read"}
              shelf={"read"}
              onUpdateBook={this.props.onUpdateBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
