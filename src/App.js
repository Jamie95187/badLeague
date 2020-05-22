import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './components/Home/Home';
import Start from './components/Start/Start';
import About from './components/About/About';
import Leagues from './components/Leagues/Leagues';
import Clubs from './components/Clubs/Clubs';
import Account from './containers/Account/Account';
import LeagueTable from './components/Leagues/LeagueTable/LeagueTable';
import HeaderLayout from './hoc/HeaderLayout';

class App extends Component {

  render() {

    let routes = (
      <Switch>
        <HeaderLayout path="/start" component={Start} />
        <HeaderLayout path="/about" component={About} />
        <HeaderLayout path="/clubs" component={Clubs} />
        <HeaderLayout path="/account" component={Account} />
        <HeaderLayout path="/leagues" exact component={Leagues} />
        <Route path="/" exact component={Home} />
      </Switch>
    )

    return (
      <div>
        {routes}
      </div>
    )
  }
}

export default withRouter(App);
