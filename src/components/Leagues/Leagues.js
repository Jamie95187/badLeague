import React, { Component } from 'react';
import League from '../../containers/Leagues/League/League';
import { useLocation } from 'react-router-dom';
import LeagueTable from './LeagueTable/LeagueTable';

class Leagues extends Component {

  render() {
    return(
      <div>
        LEAGUES
        <League />
      </div>
    )
  };
};

export default Leagues;
