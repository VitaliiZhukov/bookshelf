import React from 'react';
import ActionCreator from '../actions/BooksActionCreators';
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default React.createClass({
  getInitialState() {
    return {
      isHovering: false // Used for close button display.
    };
  },

  getDefaultProps() {
    return {
      book: {}
    };
  },

  componentDidMount() {
  },

  removeBook(id){
    ActionCreator.removeBook(id);
  },

  handleHover (val) {
    this.setState({ isHovering: val });
  },

  handleDescriptionClick (id) {
    if (this.props.fullHeight){
      this.props.handleClick(-1); // Pass event to parent component (BookList) to collapse row.
    }
    else{
      this.props.handleClick(id); // Show full height row.
    }
  },

  render() {
    let {book} = this.props;
    let descr = (this.props.fullHeight)?book.descr:book.descr.substr(0,30).trim()+'...';
    return (
      <tr 
        onMouseOver={this.handleHover.bind(this,true)} 
        onMouseOut={this.handleHover.bind(this,false)}>
        <td className="mdl-data-table__cell--non-numeric books-table__title">{book.title}</td>
        <td className="mdl-data-table__cell--non-numeric">{book.author}</td>
        <td className="mdl-data-table__cell--non-numeric">{book.genre}</td>
        <td className="mdl-data-table__cell--non-numeric books-table__description" 
            onClick={this.handleDescriptionClick.bind(this,book.id)}>{descr}</td>
        <td>{book.rating!==0?book.rating:''}</td>
        <td>
          {this.state.isHovering ? 
            <div 
              className="book__remove book__remove--visible" 
              onClick={this.removeBook.bind(this,book.id)}>
            </div> : 
            <div 
              className="book__remove">
            </div> }
        </td>
      </tr>
    );
  }
});
