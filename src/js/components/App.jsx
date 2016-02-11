import React, {PropTypes} from 'react';
import BookList from './BookList.jsx';
// import BookShelf from './BookShelf.jsx';
import NewBook from './NewBook.jsx';
import ActionCreator from '../actions/BooksActionCreators';

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

  loadBooks(){
    ActionCreator.loadBooks();
  },

  componentWillMount() {
    // $.getJSON('./data/books.json',function(result){ // Load json file from server. Probably should be realized in Store gist in flux. 
    //     this.props = result;
    //     this.setState({books:result});
    //     this.onLoadBooks();
    // }.bind(this));
    this.loadBooks();
  },

  render() {
    let {books} = this.props;
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
