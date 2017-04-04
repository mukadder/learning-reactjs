import React from 'react';

import Book from './Book';
import Form from './Form';
import App_api from './App_api';
import EventEmitter from './Eventemitter'
import configureStore from '../store';
import * as actions from '../actions';
import CountryList from './CountryList'
import FetchDemo from './FetchDemo'
import CartItem from './CartItem'
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
    const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 3,
    price: 8
};

    return (
      <ul className="book-list">
<CartItem title={order.title} image={order.image} initialQty={order.initialQty} price={order.price}/>


      </ul>
    );
  }
   
}

export default BookList;
