import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className='title'> Welcome to the league page </h2>
        <Logo />
      </div>
    )
  }
}

export default App;
