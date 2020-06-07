import React, { Component } from 'react';

import classes from './InputText.css';


class InputText extends Component {

  state = {
    active: (this.props.locked && this.props.active) || false,
    value: this.props.value || "",
    error: this.props.error || "",
    label: this.props.label || "Label"
  };

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
    // console.log(this.state.value)
  }

  // Pressing 'Enter' auto completes the field into the predicted value
  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }

  render() {
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;

    return (
      <div className={fieldClassName}>
        {active &&
          value &&
          predicted &&
          predicted.includes(value) && <p className="predicted">{predicted}</p>}
        <input
          id={this.props.id}
          {...props.elementConfig}
          type="text"
          value={props.value}
          placeholder={label}
          onChange={props.changed}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
        />
        <label htmlFor={1} className={error && "error"}>
          {error || label}
        </label>
      </div>
    );
  }
}

export default InputText;
