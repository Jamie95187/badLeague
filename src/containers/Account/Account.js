import React, { Component } from 'react';
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
    form = <TeamBuilder />;
  }

  openClubForm = (form) => {
    this.setState({ building: true });
    form = <ClubBuilder />;
  }

  render(){
    let form = null;
    return (
      <Aux>
        <Modal show={true}>
          {TeamBuilder}
        </Modal>
        <h1>Accounts Page</h1>
        <button
          onClick={() => this.openTeamForm(form)}
          >Add Team</button>
        <button
          onClick={() => this.openClubForm(form)}
          >Add Club</button>
      </Aux>
    )
  }
}

export default Account;
