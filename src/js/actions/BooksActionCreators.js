import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

/* eslint-disable no-console */

export default {
  addBook(bTitle,author,description,rating) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.BOOK_ADDED,
      author: author,
      bookTitle: bTitle,
      description: description,
      rating: rating
    });
  },

  loadBooks(books){
    Dispatcher.handleServerAction({
      type: Constants.ActionTypes.BOOKS_LOADED,
      books: books
    });
  }
};
