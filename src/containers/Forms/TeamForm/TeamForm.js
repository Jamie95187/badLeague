import React, { Component } from 'react';
import InputText from '../../InputText/InputText';
import Selecter from '../../Selecter/Selecter';
import Button from '../../../components/UI/Button/Button';
import './TeamForm.css';

// This needs to be dynamic

class TeamForm extends Component {

  componentDidMount() {
    console.log("Mounted TeamForm");
  }

  render(){
    return (
      <form>
        <div>
          Enter your Team's details
        </div>
        <div className="form-group">
          <InputText
            id={1}
            label="Team Name"
            predicted=""
            locked={false}
            active={false}
          />
          <p></p>
          <InputText
            id={2}
            label="Contact Email"
            predicted=""
            locked={false}
            active={false}
          />
          <p></p>
          <Selecter/>
        </div>
        <div className="form-group">
          <Button className="form-control btn btn-primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    );
  };
};

export default TeamForm;
