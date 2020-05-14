import React, { Component } from 'react';
import League from '../../containers/Leagues/League/League';
import { Route, Switch, useParams } from 'react-router-dom';

class Leagues extends Component {
  // componentDidMount(){
  //   console.log("Leagues Mounted");
  // }
  render() {
    return(
        <div>
          <h1>LEAGUES PAGE</h1>
            <ul>
              <League/>
            </ul>
            <Switch>
              <Route path="/leagues/:id" children={<Child />} /> 
            </Switch>
        </div>
    )
  };
};

function Child() {
  // We can use the `useParams` hook to access
  // the dynamic pieces of the URL
  let { id } = useParams();
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  )

}

export default Leagues;
