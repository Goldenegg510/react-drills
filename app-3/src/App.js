import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      list:['butter', 'lettuce', 'lemons', 'chicken', 'light bulbs'],
      input:''
    }
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => {this.handleChange(e)}} />
        <br/>
        {this.state.list.map(element => {
          if(element.includes(this.state.input)){
          return(<h2>{element}</h2>)
          }
        })}
      </div>
    );
  }
}

export default App;
