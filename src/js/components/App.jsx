import React, {PropTypes} from 'react';
import BookList from './BookList.jsx';
import BookShelf from './BookShelf.jsx';
import NewBook from './NewBook.jsx';

export default React.createClass({
  propTypes: {
    // tasks: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    //onAddBook: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      // tasks: [],
      books:[]
    }
  },

  render() {
    let {onAddBook, onClear, books} = this.props;
    return (
      <div className="container">
        <BookList books={books} />

        <br />

        <NewBook />
      </div>
    );
  }
});
