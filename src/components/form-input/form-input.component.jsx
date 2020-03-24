/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './form-input.styles.scss';
import PropTypes from 'prop-types';

const FormInput = ({ handleChange, label, value }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} />
      {label ? (
        <label className={`${value.length} ? "shrink" : "" form-input-label`}>{label}</label>
      ) : null}
    </div>
  );
};

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
