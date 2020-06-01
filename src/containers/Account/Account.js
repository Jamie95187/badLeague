import React, { Component } from 'react';
import TeamForm from '../Forms/TeamForm/TeamForm';
import TeamBuilder from '../../containers/TeamBuilder/TeamBuilder';
import ClubBuilder from '../../containers/ClubBuilder/ClubBuilder';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux';

class Account extends Component {
  state = {
    building: false,
    teamBuilding: false,
    clubBuilding: false
  };

  openTeamForm = () => {
    console.log("HENLO")
    this.setState({ teamBuilding: true, building: true });
    console.log(this.state.teamBuilding)
  }

  openClubForm = () => {
    this.setState({ clubBuilding: true, building: true });
  }

  render(){
    let form = null;
    if (this.state.teamBuilding === true && this.state.clubBuilding === false) {
      form = (
        <div>
          <TeamForm />
        </div>
      )
    } else if (this.state.clubBuilding === true && this.state.teamBuilding === false) {
      form = (
        <div>
          <ClubBuilder />
        </div>
      )
    }
    return (
      <Aux>
        <h1>Accounts Page</h1>
        <button
          onClick={() => this.openTeamForm()}
          >Add Team</button>
        <button
          onClick={() => this.openClubForm}
          >Add Club</button>
        <Modal show={this.state.building}>
          {form}
        </Modal>
      </Aux>
    )
  }
}

export default Account;
