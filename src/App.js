import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    name: 'Krishna Bharat'
  };
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1> 
        <p>This is really working!</p>
        <UserOutput 
        userName={this.state.name}/>
        <UserOutput />
      </div>
    );
  }
}

export default App;
