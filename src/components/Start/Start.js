import React, { Component } from 'react';
import Fixtures from '../../containers/Fixtures/Fixtures';
class Start extends Component {

  render() {
    return (
      <div>
        <h1>Start Page</h1>
        <h2>Today's Fixtures</h2>
        <Fixtures/>
        <h2>Leagues</h2>
      </div>
    )
  }
};

export default Start;
