/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>{label}</FormInputLabel>
    ) : null}
  </GroupContainer>
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
