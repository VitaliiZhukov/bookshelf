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
      <p>Hello, world!!!</p>
    );
  }
});
