import React, { Component } from "react";
import "./App.css";
import ToDo from './components/ToDo'

class App extends Component {
constructor(){
  super()
  this.state = {
    input: '',
    list: []
  }
}

handleChange = e => {
this.setState({input: e.target.value})
}

handleSubmit = e => {
  e.preventDefault()
  this.setState({list: [...this.state.list, this.state.input]})
  this.setState({input:''})
}

  render() {
    return (
      <div className="App">
        <h1>My todo list:</h1>
        <input value={this.state.input} onChange={e => this.handleChange(e)}/>
        <button onClick={e => this.handleSubmit(e)}>Add ToDo</button>
        <ToDo list={this.state.list} />
      </div>
    );
  }
}

export default App;
