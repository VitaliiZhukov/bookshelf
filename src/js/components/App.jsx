import React, {PropTypes} from 'react';
import BookList from './BookList.jsx';
import BookShelf from './BookShelf.jsx';
import NewBook from './NewBook.jsx';

export default React.createClass({
  propTypes: {
    books: PropTypes.array.isRequired,
    // onAddBook: PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return {
      books:[]
    }
  },

  render() {
    let {onAddBook, books} = this.props;
    return (
      <div className="wrapper">
        <div className="left-column__wrapper">
          <NewBook />
        </div>
        <div className="right-column__wrapper">
          <BookList books={books} />
        </div>
      </div>
    );
  }
});
