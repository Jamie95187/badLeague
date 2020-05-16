import React, { Component } from 'react';
import League from '../../containers/Leagues/League/League';
import { Route, Link, withRouter } from 'react-router-dom';
import LeagueTable from './LeagueTable/LeagueTable';
import queryString from 'query-string';

const First = () => <span style={{ fontSize: "24px" }}>First League</span>;
const Second = () => <span style={{ fontSize: "24px" }}>Second League</span>;

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
  console.log(location)
  const parsed = queryString.parse(location.search);
  const target = itemsObj.find(o => o.search === parsed.league);
  return (
    <Route path={`/leagues`} component={target ? target.component : LeagueTable } />
  );
};

const RoutesWithRouter = withRouter(Routes);

export default Leagues;
