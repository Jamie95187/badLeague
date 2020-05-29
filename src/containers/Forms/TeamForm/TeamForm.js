import React from 'react';
import Field from '../InputField/InputField';
import './Form.css';

const TeamForm = () => {
  return (
    <form>
      <div className="form-group">
        <Field
          id={1}
          label="Team Name"
          predicted="test1MensTeam"
          locked={false}
          active={false}
        />
        <Field
          id={2}
          label="Email"
          predicted="test1@example.com"
          locked={false}
          active={false}
        />
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default TeamForm;
