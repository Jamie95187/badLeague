import React, { Component } from 'react';

class Fixture extends Component {
  state = {
    homeClubName: "TestHomeClub",
    awayClubName: "TestAwayClub",
    homeVenue: "TestHomeClubVenue"
  };

  render() {
    return (
      <div>
        <p>{this.state.homeClubName} vs {this.state.awayClubName}</p>
        <br />
        At {this.state.homeVenue}
      </div>
    )
  }
}

export default Fixture;
