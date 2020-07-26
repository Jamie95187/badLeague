import React, { Component } from 'react';
import Input from '../../Input/Input';
import Selecter from '../../Selecter/Selecter';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-teams';
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
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Contact Email'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        club: {
          elementType: 'select',
          elementConfig: {
            options: [
              {value: 'Loading...', label: 'Loading...'}
            ]
          },
          value: 'clubOne',
          validation: {
            required: true
          },
          valid: true,
          touched: false
        },
        division: {
          elementType: 'select',
          elementConfig: {
            options: [
              {value: 'mensDivisionOne', label: 'Divsion One Mens'},
              {value: 'mensDivisionTwo', label: 'Division Two Mens'}
            ]
          },
          value: 'mensDivisionOne',
          valid: true
        }
      }
  }

  getClubDataPromise() {
    return axios({
        url: 'https://badminton-league-49e71.firebaseio.com/clubs.json',
        method: 'get',
        timeout: 8000
      })
      .then (res => res.data)
      .catch (err => console.error(err))
  }

  populateClubOptions = async () => {
    let clubs = []
    const result = await this.getClubDataPromise().then(function(result){
      for (const club in result) {
        clubs.push({value: result[club].name, label: result[club].name})
      }
    })
    const updatedFormElement = this.updateObject(this.state.teamForm['club'], {
      elementConfig: {
        options: clubs
      }
    });

    const updatedTeamForm = this.updateObject(this.state.teamForm, {
      ['club']: updatedFormElement
    });

    updatedTeamForm['club'] = updatedFormElement;

    this.setState({teamForm: updatedTeamForm})

  }

  buildContinue = () => {
    // API request to post details onto site
    const teamFormParsed = {};
    for (let key in this.state.teamForm) {
      teamFormParsed[key] = this.state.teamForm[key].value
    }
    axios.post('/teams.json', teamFormParsed)
      .then(response => console.log(response))
  }

  updateObject = (oldObject, updatedProperties) => {
    return {
      ...oldObject,
      ...updatedProperties
    };
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = this.updateObject(this.state.teamForm[inputIdentifier], {
      value: event.target.value
    });

    const updatedTeamForm = this.updateObject(this.state.teamForm, {
      [inputIdentifier]: updatedFormElement
    });

    updatedTeamForm[inputIdentifier] = updatedFormElement;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    console.log(updatedFormElement)
    this.setState({teamForm: updatedTeamForm});

  }

  checkValidity(value, rules) {
    let isValid = true;

    // Check if this is true
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    return isValid;
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
            label={formElement.id}
            elementConfig={formElement.config.elementConfig}
            elementType={formElement.config.elementType}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            locked={false}
            active={false}
          />
        ))}
      </form>
    )
    this.populateClubOptions()
    return (
      <div>
        <div>
          Enter your Team's details
        </div>
        <div className="form-group">
          {form}
        </div>
        <div className="form-group">
          <Button className="form-control btn btn-primary" clicked={() => this.buildContinue()}>
            Submit
          </Button>
          <Button clicked={() => this.props.cancelFunc()}>
            Cancel
          </Button>
        </div>
      </div>
    );
  };
};

export default TeamForm;
