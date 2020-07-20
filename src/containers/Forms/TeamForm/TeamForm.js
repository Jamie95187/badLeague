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
        club: {
          elementType: 'select',
          elementConfig: {
            options: [
              {value: 'clubOne', label: 'Club One'},
              {value: 'clubTwo', label: 'Club Two'}
            ]
          },
          value: 'clubOne'
          // validation: {},
          // valid: true
        },
        division: {
          elementType: 'select',
          elementConfig: {
            options: [
              {value: 'mensDivisionOne', label: 'Divsion One Mens'},
              {value: 'mensDivisionTwo', label: 'Division Two Mens'}
            ]
          },
          value: 'mensDivisionOne'
        }
      }
  }

  getDataPromise() {
    return axios({
        url: 'https://badminton-league-49e71.firebaseio.com/clubs.json',
        method: 'get',
        timeout: 8000
      })
      .then(res => res.data)
      .catch (err => console.error(err))
  }

  componentWillMount() {
    let clubs = {}
    this.getDataPromise()
      .then(res => console.log(res))
    // axios.get('https://badminton-league-49e71.firebaseio.com/clubs.json')
    //   .then(response => clubs = response.data)
    //   .catch(err => console.log("Error did not receive response"))
  }

  buildContinue = () => {
    // API request to post details onto site
    const teamFormParsed = {};
    for (let key in this.state.teamForm) {
      teamFormParsed[key] = this.state.teamForm[key].value
    }
    console.log(teamFormParsed);
    axios.post('/teams.json', teamFormParsed)
      .then(response => console.log(response))
    // for (let formElementIdentifier in this.state.teamForm) {
    //   console.log(this.state.teamForm[formElementIdentifier].value)
    // }
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

    this.setState({teamForm: updatedTeamForm});

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
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            locked={false}
            active={false}
          />
        ))}
      </form>
    )
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
          <Button clicked={this.props.buildCancel}>
            Cancel
          </Button>
        </div>
      </div>
    );
  };
};

export default TeamForm;
