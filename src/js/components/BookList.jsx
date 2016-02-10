import React from 'react';
import Book from './Book.jsx';
import $ from 'jquery/dist/jquery.min.js';
import ActionCreator from '../actions/BooksActionCreators';

export default React.createClass({
  getDefaultProps() {
    return {
      books: [],
      ascending: false
    };
  },

  componentWillMount() {
    $.getJSON('../data/books.json',function(result){
        this.props = result;
        this.setState({books:result});
        this.onLoadBooks();
    }.bind(this));
  },

  onLoadBooks(){
    ActionCreator.loadBooks(this.props);
  },

  sortBy(property){
    let {books} = this.props;
    this.ascending = !this.ascending;

    books = books.sort(function(a,b){
      let nameA=a[property].toLowerCase(), 
          nameB=b[property].toLowerCase();
      if (nameA < nameB)
        return -1;
      if (nameA > nameB)
        return 1;
      return 0
    });

    if (!this.ascending)
      books.reverse();
    this.setState({books:books});
  },

  render() {
    let {books} = this.props;

    return (
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th onClick={this.sortBy.bind(this,'title')}>Название</th>
            <th onClick={this.sortBy.bind(this,'author')}>Автор</th>
            <th>Жанр</th>
            <th>Описание</th>
            <th>Оценка</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map(book =>
            <Book book={book} key={book.id} />
          )}
        </tbody>
      </table>
    );
  }
});
