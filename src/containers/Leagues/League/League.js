import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class League extends Component {

  state =
    [
      {
        league: 'testMensLeague1',
        leagueContacts: {
          manager1: 'testManager1',
          manager2: 'testManager2'
        }
      },
      {
        league: 'testMensLeague2',
        leagueContacts: {
          manager1: 'testManager1',
          manager2: 'testManager2'
        }
      }
    ]


  render() {
    return (
      <li>
        <NavLink
          to={'/leagues?search=' + this.state[0].league}>{this.state[0].league}</NavLink>
      </li>
    )
  }
}

export default League;
