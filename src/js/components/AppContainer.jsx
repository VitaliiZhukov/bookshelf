import React from 'react';
// import TodoStore from '../stores/TodoStore';
// import ActionCreator from '../actions/TodoActionCreators';
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

  // handleAddTask(e) {
  //   let title = prompt('Enter task title:');
  //   if (title) {
  //     ActionCreator.addItem(title);
  //   }
  // },

  handleClear(e) {
    ActionCreator.clearList();
  },

  render() {
    // let {tasks} = this.state;
    let {books} = this.state;
    return (
      <App
        onClear={this.handleClear}
        books={books} />
    );
  }
});
