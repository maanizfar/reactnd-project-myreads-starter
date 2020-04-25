import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";

class BooksApp extends React.Component {
  state = {
    allBooks: [],
  };

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books });
    });
  };

  componentDidMount = () => {
    this.getAllBooks();
  };

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.getAllBooks();
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage
              allBooks={this.state.allBooks}
              onUpdateBook={this.updateBook}
            />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <SearchPage
              allBooks={this.state.allBooks}
              onUpdateBook={this.updateBook}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
