import React, { Component } from 'react';
import Input from '../../Input/Input';
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
    const formElementsArray = [];
    for (let key in this.state.teamForm){
      formElementsArray.push({
        id: key,
        config: this.state.teamForm[key]
      })
    }
    let form = (
      <form onSubmit={null}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            value={formElement.config.value}
            changed={null}
            locked={false}
            active={false}
          />
        ))}
      </form>
    )
    return (
      <form>
        <div>
          Enter your Team's details
        </div>
        <div className="form-group">
          {form}
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
