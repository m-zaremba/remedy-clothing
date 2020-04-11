import React from 'react';
import PropTypes from 'prop-types';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    Spinner.propTypes = {
      isLoading: PropTypes.bool.isRequired,
    };
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

WithSpinner.propTypes = {
  WrappedComponent: PropTypes.element,
};

export default WithSpinner;
