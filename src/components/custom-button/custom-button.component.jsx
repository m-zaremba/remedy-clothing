import React from 'react';
import './custom-button.styles.scss';
import PropTypes from 'prop-types';

const CustomButton = ({ children, type }) => {
  return type === 'submit' ? (
    <button className="custom-button" type="submit">
      {children}
    </button>
  ) : null;
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default CustomButton;
