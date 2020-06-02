import React from 'react';

import classes from './Input.css';

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch ( props.elementType ){
    case ('input'):
      inputElement = <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed} />;
      break;
    case ('textarea'):
      inputElement = <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed} />;
      break;
      case ('select'):
        inputElement = (
          <select
            className={inputClasses.join(' ')}
            value={props.value}
            onChange={props.changed}>
            {props.elementConfig.options.map(option => (
              <option
                key={option.value}
                value={option.value}>
                {option.displayValue}
              </option>
            ))}
          </select>
          );
        break;
    default:
      inputElement = <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed} />;
    }

  return(
  <div className={classes.Input}>
    <label className={classes.Label}>{props.label}</label>
    {inputElement}
  </div>
  );

}

export default input;

// class InputField extends Component {
//
//   // Move methods into ClubForm component (changeValue)
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       active: (props.locked && props.active) || false,
//       value: props.value || "",
//       error: props.error || "",
//       label: props.label || "Label"
//     };
//   }
//
//   changeValue(event) {
//     const value = event.target.value;
//     this.setState({ value, error: "" });
//     // console.log(this.state.value)
//   }
//
//   // Pressing 'Enter' auto completes the field into the predicted value
//   handleKeyPress(event) {
//     if (event.which === 13) {
//       this.setState({ value: this.props.predicted });
//     }
//   }
//
//   render() {
//     const { active, value, error, label } = this.state;
//     const { predicted, locked } = this.props;
//     const fieldClassName = `field ${(locked ? active : active || value) &&
//       "active"} ${locked && !active && "locked"}`;
//
//     return (
//       <div className={fieldClassName}>
//         {active &&
//           value &&
//           predicted &&
//           predicted.includes(value) && <p className="predicted">{predicted}</p>}
//         <input
//           id={this.props.id}
//           type="text"
//           value={value}
//           placeholder={label}
//           onChange={this.changeValue.bind(this)}
//           onKeyPress={this.handleKeyPress.bind(this)}
//           onFocus={() => !locked && this.setState({ active: true })}
//           onBlur={() => !locked && this.setState({ active: false })}
//         />
//         <label htmlFor={1} className={error && "error"}>
//           {error || label}
//         </label>
//       </div>
//     );
//   }
// }
//
// export default InputField;
