import React, { Component } from 'react';
import Select from 'react-select';
import classes from './Input.css';


class Input extends Component {

  state = {
    active: (this.props.locked && this.props.active) || false,
    value: this.props.value || "",
    error: this.props.error || "",
    label: this.props.label || "Label"
  };

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
  }

  render() {
    let inputElement = null;
    let options = null;

    const { active, value, error, label } = this.state;
    const { locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;

    switch ( this.props.elementType ) {
      case ('input'):
        inputElement = <input
          id={this.props.id}
          type="text"
          {...this.props.elementConfig}
          value={this.props.value}
          onChange={this.props.changed}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })} />;
        break;
      case ('select'):
        {options = this.props.elementConfig.options}
        inputElement = (
          <Select
            options={options}/>
        )
        break;
      default: inputElement = <input
        id={this.props.id}
        type="text"
        {...this.props.elementConfig}
        value={this.props.value}
        onChange={this.props.changed}
        onFocus={() => !locked && this.setState({ active: true })}
        onBlur={() => !locked && this.setState({ active: false })} />;
    }

    return (
      <div className={fieldClassName}>
        {inputElement}
      </div>
    );
  }
}

export default Input;
