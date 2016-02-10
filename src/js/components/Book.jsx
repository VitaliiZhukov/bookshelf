import React from 'react';
import ActionCreator from '../actions/BooksActionCreators';

export default React.createClass({
  getInitialState() {
    return {};
  },

  getDefaultProps() {
    return {
      book: {
        bookTitle: '',
        autdor: ''
      }
    };
  },

  componentDidMount() {
  },

  handleMouseOver () {
    this.setState({ isHovering: true });
  },

  handleMouseOut () {
    this.setState({ isHovering: false });
  },

  render() {
    let {book} = this.props;
    let descr = book.descr.length>=30?book.descr.substr(0,30).trim()+'...':book.descr;
    return (
      <tr onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.genre}</td>
        <td>{descr}</td>
        <td>{book.rating}</td>
        <td>
          {this.state.isHovering ? <div className="book__remove book__remove--visible"></div> : <div className="book__remove"></div> }
        </td>
      </tr>
    );
  }
});
