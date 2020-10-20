import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './header.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

describe('testing Header component', () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: 'qwertyuiop',
      },
      signOutStart: mockSignOutStart,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('testing Header if currentUser is present', () => {
    it('should render sign out link', () => {
      expect(wrapper.find('OptionLink').at(2).text()).toBe('SIGN OUT');
    });

    it('should call signOutStart method when link is clicked', () => {
      wrapper.find('OptionLink').at(2).simulate('click');

      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe('testing Header if there is no currentUser signed in', () => {
    it('should render sign in link', () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart,
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.find('OptionLink').at(2).text()).toBe('SIGN IN');
    });
  });

  describe('testing CartDropdown visibility if hidden is true', () => {
    it('should not render CartDropdown', () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });

  describe('testing CartDropdown visibility if hidden is false', () => {
    it('should render CartDropdown', () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart,
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});
