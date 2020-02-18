import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      h2array: ['hello', 'jake', 'app-2']
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.h2array.map(element => {
          return(<h2>{element}</h2>)
        })}
      </div>
    );
  }
}

export default App;
