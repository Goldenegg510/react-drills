import React, { Component } from "react";
import "./App.css";
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      r2d2:{}
    }
  }

  componentDidMount(){
    axios.get('https://swapi.co/api/people/2').then(response => {
      this.setState({
        r2d2: response.data
      })
    })  
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.r2d2.name}</h2>
      </div>
    );
  }
}

export default App;
