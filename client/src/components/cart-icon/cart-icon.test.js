import React from 'react';
import { shallow } from 'enzyme';
import { CartIcon } from './cart-icon.component';

describe('testing CartIcon component', () => {
  let wrapper;
  let mockToggleCartHidden;
  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden,
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it('should render CartIcon component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleCartHidden when icon is clicked', () => {
    wrapper.find('CartIconContainer').simulate('click');
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it('should render the itemCount value', () => {
    const itemCount = parseInt(wrapper.find('ItemCount').text(), 10);
    expect(itemCount).toBe(0);
  });
});
