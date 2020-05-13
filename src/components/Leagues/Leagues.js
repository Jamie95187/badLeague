import React, { Component } from 'react';
import DifferentLeagues from '../../containers/Leagues/Leagues';

class Leagues extends Component {
  // componentDidMount(){
  //   console.log("Leagues Mounted");
  // }
  render() {
    return(
      <div>
        <h1>LEAGUES PAGE</h1>
        <DifferentLeagues />
      </div>
    )
  };
};

export default Leagues;
