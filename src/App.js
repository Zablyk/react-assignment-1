import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    userName: 'Krishna Bharat'
  };
  
  nameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1> 
        <p>This is really working!</p>
        <UserOutput 
        username={this.state.userName}/>
        <UserOutput
        username={this.state.userName} />
      </div>
    );
  }
}

export default App;
