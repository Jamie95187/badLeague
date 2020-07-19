import React, { Component } from 'react';
import Input from '../../Input/Input';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-teams';

// Similar to Contact Data in the Burger App

class ClubForm extends Component {

  state = {
    clubForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Club\'s Name'
          },
          value: '',
          // validation: {
          //   required: true
          // },
          // valid: false,
          // touched: false
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Contact Email'
          },
          value: '',
          // validation: {
          //   required: true
          // },
          // valid: false,
          // touched: false
        },
        phone: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Contact Telephone Number'
          },
          value: '',
        },
        description: {
          elemetntType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Any relevant information (eg club nights, venue)'
          },
          value: '',
        }
      }
  }

  render(){
    return (
      <form>
        <div>
          Enter your Club's details
        </div>
        <div className="form-group">
          <Input
            id={1}
            label="Club Name"
            predicted="test1MensTeam"
            locked={false}
            active={false}
          />
          <p></p>
          <Input
            id={2}
            label="Email"
            predicted="test1@example.com"
            locked={false}
            active={false}
          />
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

export default ClubForm;
