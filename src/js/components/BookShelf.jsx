import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      books: []
    };
  },

  componentDidMount() {
  },

  render() {
    let {books} = this.props;

    return (
      <div>
        {(books.length === 0) ? 
          <div>
            Читайте!
          </div> : 
          false
        }
        <div className='shelf__background'>
        </div>
      </div>
    );
  }
});
