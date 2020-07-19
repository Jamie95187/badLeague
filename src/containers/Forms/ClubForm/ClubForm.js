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
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Contact Email'
          },
          value: '',
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

  buildContinue = () => {
    // API request to post details onto site
    const clubFormParsed = {};
    for (let key in this.state.clubForm) {
      clubFormParsed[key] = this.state.clubForm[key].value
    }
    axios.post('/clubs.json', clubFormParsed)
      .then(response => console.log(response))
  }

  updateObject = (oldObject, updatedProperties) => {
    return {
      ...oldObject,
      ...updatedProperties
    };
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = this.updateObject(this.state.clubForm[inputIdentifier], {
      value: event.target.value
    });

    const updatedTeamForm = this.updateObject(this.state.clubForm, {
      [inputIdentifier]: updatedFormElement
    });

    updatedTeamForm[inputIdentifier] = updatedFormElement;

    this.setState({clubForm: updatedTeamForm});

  }

  render(){
    const formElementsArray = [];
    for (let key in this.state.clubForm){
      formElementsArray.push({
        id: key,
        config: this.state.clubForm[key]
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
          Enter your Club's details
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

export default ClubForm;
