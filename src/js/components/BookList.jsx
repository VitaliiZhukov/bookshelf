import React from 'react';
import Book from './Book.jsx';

export default React.createClass({
  getDefaultProps() {
    return {
      books: []
    };
  },

  render() {
    let {books} = this.props;

    return (
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Название</th>
            <th>Автор</th>
            <th>Жанр</th>
            <th>Описание</th>
            <th>Оценка</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map(book =>
            <Book book={book} key={book.author} />
          )}
        </tbody>
      </table>
    );
  }
});
