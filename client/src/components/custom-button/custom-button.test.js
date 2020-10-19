import React from 'react';
import { shallow } from 'enzyme';
import { CustomButton } from './custom-button.component';

describe('testing CustomButton component', () => {
  const mockChildren = <div>test</div>;
  it('should render CustomButton component', () => {
    expect(shallow(<CustomButton>{mockChildren}</CustomButton>)).toMatchSnapshot();
  });
});
