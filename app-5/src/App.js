import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Child  from './components/Child'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Child image='https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
      </div>
    );
  }
}

export default App;
