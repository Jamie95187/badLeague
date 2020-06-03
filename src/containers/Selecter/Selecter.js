import React, { Component } from 'react';
import Select from 'react-select';
// import classes from './InputSelecter.css';

class Selecter extends Component {

  render() {
    const options = [
      { value: "mensDivisionOne", label: "Mens Div One"},
      { value: "mensDivsionTwo", label: "Mens Div Two"}
    ]
    return (
      <div>
        <Select options={options} />
      </div>
    )
  }
}
 export default Selecter;
