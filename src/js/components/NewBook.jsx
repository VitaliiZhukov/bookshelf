import React from 'react';
import Input from 'react-bootstrap/lib/Input';

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <form>
        <Input
          type="text"
          value={this.state.value}
          placeholder="Название книги"
          hasFeedback
          ref="input"
          groupClassName="group-class"
          labelClassName="label-class"
          onChange={this.handleChange} />
        <Input
          type="text"
          value={this.state.value}
          placeholder="Автор"
          hasFeedback
          ref="input"
          groupClassName="group-class"
          labelClassName="label-class"
          onChange={this.handleChange} />
      </form>
    );
  }
});
