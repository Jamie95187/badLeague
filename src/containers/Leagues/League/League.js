import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink
          to={'/leagues?name=' + this.state.league}>{this.state.league}</NavLink>
      </li>
    )
  }
}

export default League;
