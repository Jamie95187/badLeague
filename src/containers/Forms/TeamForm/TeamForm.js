import React, { Component } from 'react';
import Field from '../../InputField/InputField';
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
          <Field
            id={1}
            label="Team Name"
            predicted="test1MensTeam"
            locked={false}
            active={false}
          />
          <p></p>
          <Field
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

export default TeamForm;
