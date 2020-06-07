import React, { Component } from 'react';
import InputText from '../../InputText/InputText';
import Selecter from '../../Selecter/Selecter';
import Button from '../../../components/UI/Button/Button';
import './TeamForm.css';

// This needs to be dynamic

class TeamForm extends Component {

  state = {
    teamForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
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
            placeholder: 'Street'
          },
          value: '',
          // validation: {
          //   required: true
          // },
          // valid: false,
          // touched: false
        },
        club: {
          elementType: 'select',
          elementConfig: {
            options: [
              {value: 'clubOne', displayValue: 'Club One'},
              {value: 'clubTwo', displayValue: 'Club Two'}
            ]
          },
          value: 'clubOne',
          // validation: {},
          // valid: true
        },
        division: {
          elementType: 'select',
          elementConfig: {
            options: [
              {value: 'mensDivisionOne', displayValue: 'Divsion One Mens'},
              {value: 'mensDivisionTwo', displayValue: 'Division Two Mens'}
            ]
          }
        }
      }
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
          <InputText
            id={1}
            label="Team Name"
            value={this.state.teamForm.value}
            changed={}
            predicted=""
            locked={false}
            active={false}
          />
          <p></p>
          <InputText
            id={2}
            label="Contact Email"
            value={this.state.teamForm.value}
            changed={}
            predicted=""
            locked={false}
            active={false}
          />
          <p></p>
          <Selecter/>
        </div>
        <div className="form-group">
          <Button className="form-control btn btn-primary" clicked={this.props.buildContinue}>
            Submit
          </Button>
          <Button clicked={this.props.buildCancel}>
            Cancel
          </Button>
        </div>
      </form>
    );
  };
};

export default TeamForm;
