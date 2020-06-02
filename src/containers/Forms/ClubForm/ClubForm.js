import React, { Component } from 'react';
import Field from '../../Input/Input';
import './TeamForm.css';

// Similar to Contact Data in the Burger App

class ClubForm extends Component {

  state = {
    clubForm: {
      clubName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Club Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      clubOwner: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Owner(s)'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      clubVenue: {
        elementType: 'textarea',
        elementConfig: {
          type: 'text',
          placeholder: "Club's address"
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },
    },
    formIsValid: false
  }

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

export default ClubForm;
