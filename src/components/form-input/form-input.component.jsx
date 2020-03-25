/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './form-input.styles.scss';
import PropTypes from 'prop-types';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

FormInput.defaultProps = {
  handleChange: () => null,
};

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
