import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logoImg from '../../assets/shuttle.jpg';


class Logo extends Component {

  render() {
    return (
      <Link to='/home'>
        <div className="Logo">
          <img
            className="image"
            src={logoImg}
            alt='shuttle'
          />
        </div>
      </Link>
    )
  };

}

export default Logo;
