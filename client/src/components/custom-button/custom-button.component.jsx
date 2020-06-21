import React from 'react';
import PropTypes from 'prop-types';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => {
  return (
    <CustomButtonContainer type="button" {...props}>
      {children}
    </CustomButtonContainer>
  );
};

CustomButton.defaultProps = {
  isGoogleSignIn: false,
  inverted: false,
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool,
};

export default CustomButton;
