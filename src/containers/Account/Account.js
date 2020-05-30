import React, { Component } from 'react';
import TeamForm from '../Forms/TeamForm/TeamForm';
import TeamBuilder from '../../containers/TeamBuilder/TeamBuilder';
import ClubBuilder from '../../containers/ClubBuilder/ClubBuilder';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux';

class Account extends Component {
  state = {
    building: false
  };

  openTeamForm = (form) => {
    this.setState({ building: true });
    form = (
      <div>
        <TeamBuilder />
      </div>
    )
    console.log("openTeamForm clicked!");
  }

  openClubForm = (form) => {
    this.setState({ building: true });
    form =(
      <div>
        <ClubBuilder />
      </div>
    )
  }

  render(){
    let form = null;
    return (
      <Aux>
        <h1>Accounts Page</h1>
        <button
          onClick={() => this.openTeamForm(form)}
          >Add Team</button>
        <button
          onClick={() => this.openClubForm(form)}
          >Add Club</button>
        <Modal show={this.state.building}>
          <TeamForm />
            Henlo
          {form}
        </Modal>
      </Aux>
    )
  }
}

export default Account;
