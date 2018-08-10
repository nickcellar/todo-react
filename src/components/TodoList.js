import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {connect} from "react-redux";
import {toggleTodoAction} from "../actions/todoActions";
import {Filter} from "../actions/filterActions";

export class TodoList extends React.Component {

  render() {
    console.log("Rendering todo list", this.props.todos);
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            onClick={() => this.props.toggleTodo(todo.id)}
            {...todo}
          />
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Filter.SHOW_ALL:
      return todos;
    case Filter.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case Filter.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};

const mapStateToProps = state => {
  return ({
    todos: getVisibleTodos(state.todos, state.filter)
  })
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodoAction(id))
});

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
