import React from 'react'
import Footer from './Footer'
import {AddTodoContainer} from "./AddTodo";
import {TodoListContainer} from "./TodoList";

export default class App extends React.Component {

  render() {
    return (
      <div>
        <AddTodoContainer/>
        <TodoListContainer/>
        <Footer/>
      </div>
    )
  }
}