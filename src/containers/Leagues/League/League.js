import React, { Component } from 'react';
import LeagueLink from '../LeagueLink/LeagueLink';

class League extends Component {

  state = {
    league: 'testMensLeague1',
    leagueContacts: {
      manager1: 'testManager1',
      manager2: 'testManager2'
    }
  }

  render() {
    return (
      <li>
        <LeagueLink
          link={'/league/' + this.state.league}
          name={this.state.league}/>
      </li>
    )
  }
}

export default League;
