import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import Start from './components/Start/Start';
import About from './components/About/About';
import Leagues from './components/Leagues/Leagues';
import Clubs from './components/Clubs/Clubs';

class App extends Component {

  render() {

    let routes = (
      <Switch>
        <Route path="/start" component={Start} />
        <Route path="/about" component={About} />
        <Route path="/leagues" component={Leagues} />
        <Route path="/clubs" component={Clubs} />
      </Switch>
    )

    return (
      <div>
        <Route path="/" exact component={Home} />
        <Layout>
          {routes}
        </Layout>
      </div>
    )
  }
}

export default App;
