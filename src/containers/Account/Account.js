import React, { Component } from 'react';
import TeamForm from '../Forms/TeamForm/TeamForm';
import ClubForm from '../Forms/ClubForm/ClubForm';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/AuxComp';

class Account extends Component {
  state = {
    teamBuilding: false,
    clubBuilding: false
  };

  openTeamForm = () => {
    this.setState({ teamBuilding: true });
  }

  openClubForm = () => {
    this.setState({ clubBuilding: true });
  }

  buildCancel = () => {
    this.setState({ teamBuilding: false, clubBuilding: false })
  }

  clickOutSideModal = () => {
    this.setState({ clubBuilding: false, teamBuilding: false });
  }

  render() {
    let form = null;
    if (this.state.teamBuilding === true && this.state.clubBuilding === false) {
      form = (
        <div>
          <TeamForm cancelFunc={() => this.buildCancel()}/>
        </div>
      )
    } else if (this.state.clubBuilding === true && this.state.teamBuilding === false) {
      form = (
        <div>
          <ClubForm cancelFunc={() => this.buildCancel()}/>
        </div>
      )
    }
    return (
      <Aux>
        <h1>Accounts Page</h1>
        <button
          onClick={() => this.openTeamForm()}
          >Add Team</button>
          <p></p>
        <button
          onClick={() => this.openClubForm()}
          >Add Club</button>
        <Modal show={this.state.clubBuilding || this.state.teamBuilding} modalClosed={this.clickOutSideModal}>
          {form}
        </Modal>
      </Aux>
    )
  }
}

export default Account;
