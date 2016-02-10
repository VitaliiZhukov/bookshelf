import React from 'react';
import BookStore from '../stores/BookStore';
import ActionCreator from '../actions/BooksActionCreators';
import App from './App.jsx';

export default React.createClass({
  _onChange() {
    this.setState(BookStore.getAll());
  },

  getInitialState() {
    return BookStore.getAll();
  },

  componentDidMount() {
    BookStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    BookStore.removeChangeListener(this._onChange);
  },

  handleClear(e) {
    ActionCreator.clearList();
  },

  render() {
    let {books} = this.state;
    return (
      <App
        onClear={this.handleClear}
        books={books} />
    );
  }
});
