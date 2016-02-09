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

  clearList() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask(task) {
    console.warn('completeTask action not yet implemented...', task);
  }
};
