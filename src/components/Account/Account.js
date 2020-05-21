import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import TeamBuilder from '../../containers/TeamBuilder/TeamBuilder';
import Aux from '../../hoc/Aux';

class Account extends Component {
  state = {
    building: false
  }
  render(){
    return (
      <Aux>
        <Modal show={true}>
          {TeamBuilder}
        </Modal>
        <h1>Accounts Page</h1>
        <Button
          clicked={this.}>Create Team</Button>
      </Aux>
    )
  }
}
