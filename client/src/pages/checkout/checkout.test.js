import React from 'react';
import { shallow } from 'enzyme';
import { Checkout } from './checkout.component';

describe('Checkout', () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      cartItems: [],
      total: 77,
    };

    wrapper = shallow(<Checkout {...mockProps} />);
  });

  it('should render Checkout component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
