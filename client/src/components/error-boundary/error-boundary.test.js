import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from './error-boundary.component.jsx';

describe('testing ErrorBoundary component', () => {
  it('should render ErrorBoundary component', () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
  });
});
