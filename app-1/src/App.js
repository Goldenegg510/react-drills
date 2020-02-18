import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      message:''
    }
  }

  handleChange = (e) => {
    this.setState({message: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => {this.handleChange(e)}} />
        <br/>
        {this.state.message}
      </div>
    );
  }
}

export default App;
