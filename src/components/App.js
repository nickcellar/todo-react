import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodoContainer'
import VisibleTodoList from '../containers/VisibleTodoList'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    )
  }
}