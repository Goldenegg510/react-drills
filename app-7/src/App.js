import React, { Component } from "react";
import "./App.css";
import NewTask from './components/NewTask'
import List from './components/List'
import ToDo from './components/ToDo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      newTask:'',
      taskArray:[]
    }
  }

  updateNewTask = (e) => {
    this.setState({
      newTask:e.target.value})
  }

  updateList = (e) => {
    e.preventDefault()
    this.setState({
      taskArray: [...this.state.taskArray, this.state.newTask],
      newTask: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My Todo list:</h1>
        <NewTask newTask={this.state.newTask} updateNewTask = {this.updateNewTask} />
        <List updateList = {this.updateList} />
        <ToDo list = {this.state.taskArray} />
      </div>
    );
  }
}

export default App;
