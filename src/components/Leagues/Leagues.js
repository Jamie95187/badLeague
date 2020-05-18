import React, { Component } from 'react';
import League from '../../containers/Leagues/League/League';
import { Route, Link, withRouter, useLocation } from 'react-router-dom';
import LeagueTable from './LeagueTable/LeagueTable';
import queryString from 'query-string';

const First = () => <span style={{ fontSize: "24px" }}>First League</span>;
const Second = () => <span style={{ fontSize: "24px" }}>Second League</span>;

// Replace with the request to the server to retrieve the teams on the league Table

const itemsObj = [
  { title: "FirstLeague", search: "first", component: LeagueTable },
  { title: "SecondLeague", search: "second", component: Second }
]

class Leagues extends Component {
  renderLink = () => item => {
    const { pathname } = this.props.location;
    return (
      <li key={item.title}>
        <Link to={`/leagues?league=${item.search}`}>{item.title}</Link>
      </li>
    )
  }
  render() {
    const { itemsObj } = this.props;
    return(
      <ul>
        <League />
        <RoutesWithRouter />
      </ul>
    )
  };
};

const Routes = ({ location }) => {
  const parsed = queryString.parse(location.search);
  const target = itemsObj.find(o => o.search === parsed.league);
  if (location.search === '' ) {
    return null;
  }
  return (
    <Route path={`/leagues`} component={target ? target.component : LeagueTable } />
  );
};

const RoutesWithRouter = withRouter(Routes);

export default Leagues;
