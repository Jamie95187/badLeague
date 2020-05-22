import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import { updateObject, checkValidity } from '../../shared/utility';

class ClubBuilder extends Component {
  state = {
    clubForm: {
      clubName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your club name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      address: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'The venue your club plays at'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      contactInfo: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Contact Info'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      formIsValid: false
    }
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  clubHandler = ( event ) => {
    event.preventDefault();
    const formData = {};
    for ( let formElementIdentifier in this.state.clubForm) {
      formData[formElementIdentifier] = this.state.clubForm[formElementIdentifier].value;
    }
    const team = {

    }

    // this.props.onTeamSubmit()
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(this.state.clubForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.clubForm[inputIdentifier].validation),
      touched: true
    });

    const updatedTeamForm = updateObject(this.state.clubForm, {
      [inputIdentifier]: updatedFormElement
    });

    updatedTeamForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedTeamForm) {
      formIsValid = updatedTeamForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({clubForm: updatedTeamForm, formIsValid: formIsValid});
  }

  render (){
    const formElementsArray = [];
    for (let key in this.state.clubForm){
      formElementsArray.push({
        id: key,
        config: this.state.clubForm[key]
      })
    }
    let form = (
      <form onSubmit={this.clubHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.vaid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>Submit Team</Button>
      </form>
    );

    if (this.props.loading){
      form = <Spinner />;
    }

    return(
      <div>
        <h4>Enter your Club's details</h4>
        {form}
      </div>
    )
  }
}

export default ClubBuilder;
