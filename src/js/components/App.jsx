import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import TaskList from './TaskList.jsx';
import BookShelf from './BookShelf.jsx';
import NewBook from './NewBook.jsx';

export default React.createClass({
  propTypes: {
    tasks: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      tasks: [],
      books:[]
    }
  },

  render() {
    let {onAddTask, onClear, tasks} = this.props;
    let {books} = this.props;
    return (
      <div className="container">
        <BookShelf books={books} />
        <TaskList tasks={tasks} />

        <div class="row">
          <Col xs={4} md={6} sm={6} lg={4}>
            <NewBook />
            <Button onClick={onAddTask} bsStyle="primary">Добавить на полку</Button>
          </Col>
        </div>
      </div>
    );
  }
});
