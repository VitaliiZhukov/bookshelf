import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _data = [];

// add private functions to modify data
function addBook(author, title, descr, rating) {
  _data = _data.concat({author, title, descr, rating});
}

// Facebook style store creation.
const BookStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      books: _data
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
    case Constants.ActionTypes.BOOK_ADDED:
      const author = action.author.trim();
      const bookTitle = action.bookTitle.trim();
      const description = action.description;
      const rating = action.rating;
      // NOTE: if this action needs to wait on another store:
      // Dispatcher.waitFor([OtherStore.dispatchToken]);
      // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
      if ((author !== '')&&(bookTitle !== '')) {
        addBook(author,bookTitle,description,rating);
        BookStore.emitChange();
      }
      break;

    // add more cases for other actionTypes...

    // no default
    }
  })
});

export default BookStore;