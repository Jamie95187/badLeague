import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import './Home.css';

class Home extends Component {
  render(){
    return(
      <div className="Home">
        <h2 className='title'> Welcome to the league page </h2>
        <Logo />
      </div>
    )
  }
}

export default Home;
