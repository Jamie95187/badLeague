import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Start from './components/Start/Start';

class App extends Component {

  render() {

    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/start" component={Start} />
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
