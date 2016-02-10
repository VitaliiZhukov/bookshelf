import React from 'react';
import ActionCreator from '../actions/BooksActionCreators';
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default React.createClass({
  getInitialState() {
    return {
      isHovering: false,
      fullHeight: false
    };
  },

  getDefaultProps() {
    return {
      book: {}
    };
  },

  componentDidMount() {
  },

  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    if (payload.action.type === Constants.ActionTypes.BOOKS_COLLAPSED){
      // this.setState({ fullHeight: false });
    }
  }),

  handleHover (val) {
    this.setState({ isHovering: val });
  },

  handleClick () {
    ActionCreator.collapseOtherBooks();
    this.setState({ fullHeight: (!this.state.fullHeight) });
  },

  render() {
    let {book} = this.props;
    let descr = this.state.fullHeight?book.descr:book.descr.substr(0,30).trim()+'...';
    return (
      <tr 
        onMouseOver={this.handleHover.bind(this,true)} 
        onMouseOut={this.handleHover.bind(this,false)}>
        <td className="mdl-data-table__cell--non-numeric books-table__title">{book.title}</td>
        <td className="mdl-data-table__cell--non-numeric">{book.author}</td>
        <td className="mdl-data-table__cell--non-numeric">{book.genre}</td>
        <td className="mdl-data-table__cell--non-numeric books-table__description" onClick={this.handleClick}>{descr}</td>
        <td>{book.rating}</td>
        <td>
          {this.state.isHovering ? <div className="book__remove book__remove--visible"></div> : <div className="book__remove"></div> }
        </td>
      </tr>
    );
  }
});
