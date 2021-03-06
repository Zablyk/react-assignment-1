import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    userName: 'Krishna Bharat'
  };
  
  switchNameHandler = (newName) => {
    this.setState({
      userName: newName
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }



  render(){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };


    return (
      <div className="App" style={style}>
        <h1>Hi, I'm yor First App</h1> 
        <p>This is really working!</p>
        <UserInput
        changed={this.nameChangedHandler}
        currentName={this.state.userName}/>
        <UserOutput 
        username="Max"
        />
        <UserOutput 
        username={this.state.userName}
        />
        <UserOutput
        username={this.state.userName}
        click={this.switchNameHandler.bind(this, 'Bency Sebastian ')} />
      </div>
    );
  }
}

export default App;
