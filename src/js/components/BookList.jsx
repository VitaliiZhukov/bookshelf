import React from 'react';
import Book from './Book.jsx';
import $ from 'jquery/dist/jquery.min.js';
import ActionCreator from '../actions/BooksActionCreators';

export default React.createClass({
  getDefaultProps() {
    return {
      books: []
    };
  },

  componentWillMount() {
    var self = this;
    $.getJSON('../data/books.json',function(result){
        self.props = result;
        self.setState({books:result});
        self.onLoadBooks();
        // self.setState({books:result});
    });
  },

  onLoadBooks(){
    ActionCreator.loadBooks(this.props);
  },

  handleSort(propertyName){
    console.log(propertyName);
    // this.sortParam = propertyName;
    // this.render;
  },

  compare(a,b) {
    if (a.title < b.title)
      return -1;
    else if (a.title > b.title)
      return 1;
    else 
      return 0;
  },

  render() {
    let {books} = this.props;
    books.sort(this.compare);

    return (
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th onClick={this.handleSort('title')}>Название</th>
            <th>Автор</th>
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
