import React, { Component } from 'react';
import Input from '../../Input/Input';
import Button from '../../../components/UI/Button/Button'

// Similar to Contact Data in the Burger App

class ClubForm extends Component {

  componentDidMount() {
    console.log("Mounted TeamForm");
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
