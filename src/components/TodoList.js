import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {connect} from "react-redux";
import {toggleTodo, VisibilityFilters} from "../actions";

export class TodoList extends React.Component {
  
  render() {
    console.log("Rendering todo list", this.props.todos);
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.toggleTodo(todo.id)}
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
  console.log("getVisibleTodos", filter, todos);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
