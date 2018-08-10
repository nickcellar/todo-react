import React from "react"
import {addTodoAction} from "../actions/todoActions";
import {connect} from "react-redux";

export class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.input = undefined;
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.submit(event)}>
          <input ref={node => this.input = node}/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }

  submit(event) {
    event.preventDefault();
    if (!this.input.value.trim()) {
      return
    }
    this.props.dispatch(addTodoAction(this.input.value));
    this.input.value = '';
  }
}

export const AddTodoContainer = connect()(AddTodo);
