import keyMirror from 'react/lib/keyMirror';

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    BOOK_ADDED: null,
    BOOK_REMOVED: null,
    BOOKS_LOAD: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
