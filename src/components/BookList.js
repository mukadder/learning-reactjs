import React from 'react';

import Book from './Book';
import Form from './Form';
import App from './App';

import configureStore from '../store';
import * as actions from '../actions';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
    this.state = this.store.getState();
  }
  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      this.setState(this.store.getState());
    });
    this.store.dispatch(actions.fetchBooks());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  deleteBook = (id) => {
    this.store.dispatch(actions.deleteBook(id));
  };
  addBook = (title, price,author) => {
    this.store.dispatch(actions.addBook(title, price,author));
  };
  render() {
    return (
      <ul className="book-list">

        <App/>

      </ul>
    );
  }
   
}

export default BookList;
