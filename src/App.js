import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import Start from './components/Start/Start';
import About from './components/About/About';
import Leagues from './components/Leagues/Leagues';
import Clubs from './components/Clubs/Clubs';
import HeaderLayout from './hoc/HeaderLayout';

class App extends Component {

  render() {

    let routes = (
      <Switch>
        <HeaderLayout path="/start" component={Start} />
        <HeaderLayout path="/about" component={About} />
        <HeaderLayout path="/leagues" component={Leagues} />
        <HeaderLayout path="/clubs" component={Clubs} />
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

export default App;
