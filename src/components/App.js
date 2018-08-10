import React from 'react'
import Footer from './Footer'
import AddTodoContainer from "../containers/AddTodoContainer";
import VisibleTodoListContainer from "../containers/VisibleTodoListContainer";

export default class App extends React.Component {

  render() {
    return (
      <div>
        <AddTodoContainer/>
        <VisibleTodoListContainer/>
        <Footer/>
      </div>
    )
  }
}