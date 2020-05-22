import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

class TeamBuilder extends Component {
  state = {
    teamForm: {
      teamName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your team name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      clubName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your team name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      division: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'mensDivOne', displayValue: 'Mens Div One'},
            {value: 'mensDivTwo', displayValue: 'Mens Div Two'}
          ]
        }
      },
      formIsValid: false
    }
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = valid.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  teamHandler = ( event ) => {
    event.preventDefault();
    const formData = {};
    for ( let formElementIdentifier in this.state.teamForm) {
      formData[formElementIdentifier] = this.state.teamForm[formElementIdentifier].value;
    }
    const team = {

    }

    this.props.onTeamSubmit()
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(this.state.teamForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.teamForm[inputIdentifier].validation),
      touched: true
    });

    const updatedTeamForm = updateObject(this.state.teamForm, {
      [inputIdentifier]: updatedFormElement;
    });

    updatedTeamForm[inputIdentifier] = updatedFormElement;

    let fromIsValid = true;
    for (let inputIdentifier in updatedTeamForm) {
      formIsValid = updatedTeamForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({teamForm: updatedTeamForm, formIsValid: formIsValid});
  }

  render (){
    const formElementsArray = [];
    for (let key in this.state.teamForm){
      formElementsArray.push({
        id: key,
        config: this.state.teamForm[key]
      })
    }
    let form = (
      <form onSubmit={this.teamHandler}>
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
        <h4>Enter your Team's details</h4>
        {form}
      </div>
    )
  }
}