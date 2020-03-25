/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import './custom-button.styles.scss';
import PropTypes from 'prop-types';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {children}
    </button>
  );
};

CustomButton.defaultProps = {
  type: 'submit',
  isGoogleSignIn: false,
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isGoogleSignIn: PropTypes.bool,
};

export default CustomButton;
