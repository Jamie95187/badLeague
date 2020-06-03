import React, { Component } from 'react';
import InputText from '../../InputText/InputText';
import './TeamForm.css';

// Similar to Contact Data in the Burger App

class ClubForm extends Component {

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
            predicted="test1MensTeam"
            locked={false}
            active={false}
          />
          <p></p>
          <InputText
            id={2}
            label="Email"
            predicted="test1@example.com"
            locked={false}
            active={false}
          />
        </div>

        <div className="form-group">
          <button className="form-control btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  };
};

export default ClubForm;
