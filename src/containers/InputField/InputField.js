import React, { Component } from "react";
import "./InputField.css";

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Label"
    };
  }

  componentDidMount () {
    console.log(this.props);
  }

  // Print email and name when button is pressed
  onSubmit () {
    console.log(this.state.value);
  }

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
    console.log(this.state.value)
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
          type="text"
          value={value}
          placeholder={label}
          onChange={this.changeValue.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
          onSubmit={this.onSubmit}
        />
        <label htmlFor={1} className={error && "error"}>
          {error || label}
        </label>
      </div>
    );
  }
}

export default InputField;
