import React from 'react';
import { shallow } from 'enzyme';
import { Directory } from './directory.component';

describe('testing Directory component', () => {
  it('should render Directory component', () => {
    expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
  });
});
