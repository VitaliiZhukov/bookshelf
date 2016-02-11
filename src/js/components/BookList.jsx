import React from 'react';
import Book from './Book.jsx';
import $ from 'jquery/dist/jquery.min.js';
import ActionCreator from '../actions/BooksActionCreators';

export default React.createClass({
  getInitialState() {
    return {
      ascending: false,
      fullHeightId: -1
    };
  },

  getDefaultProps() {
    return {
      books: []
    };
  },

  componentWillMount() {
    $.getJSON('./data/books.json',function(result){ // Load json file from server. Probably should be realized in Store gist in flux. 
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
    this.setState({ascending: !this.state.ascending},function(){ // Change sort order and start sorting books array by selected property.
      books = books.sort(function(a,b){
        let nameA=a[property], 
            nameB=b[property];
        if (typeof nameA === 'string'){
          nameA = nameA.toLowerCase();
          nameB = nameB.toLowerCase();
        }
        if (nameA < nameB)
          return -1;
        if (nameA > nameB)
          return 1;
        return 0
      });

      if (!this.state.ascending)
        books.reverse();
      this.setState({books:books});
    });
  },

  handleHeight(id){
    this.setState({ fullHeightId : id}); // Set Id of the row that will be full heighted in the table. If id is -1 then all rows are collapsed.
  },

  render() {
    let {books} = this.props;
    return (
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th onClick={this.sortBy.bind(this,'title')} className="mdl-data-table__cell--non-numeric pointer">Название</th>
            <th onClick={this.sortBy.bind(this,'author')} className="mdl-data-table__cell--non-numeric pointer">Автор</th>
            <th className="mdl-data-table__cell--non-numeric">Жанр</th>
            <th className="mdl-data-table__cell--non-numeric">Описание</th>
            <th onClick={this.sortBy.bind(this,'rating')} className="pointer">Оценка</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map(book =>
            <Book 
              book={book} 
              key={book.id} 
              handleClick={this.handleHeight}
              fullHeight={this.state.fullHeightId === book.id}
              />
          )}
        </tbody>
      </table>
    );
  }
});
