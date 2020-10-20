import React from 'react';
import { shallow } from 'enzyme';

import { MenuItem } from './menu-item.component';

describe('testing MenuItem component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const linkUrl = '/hats';
  const size = 'large';
  const imageUrl = 'www.testImageURL.com';

  beforeEach(() => {
    mockMatch = {
      url: '/shop',
    };

    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      linkUrl,
      size,
      title: 'hats',
      imageUrl,
    };

    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  it('should render MenuItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push with the right string when MenuItemContainer is clicked', () => {
    wrapper.find('MenuItemContainer').simulate('click');

    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
  });

  it('should pass size to MenuItemContainer as the prop size', () => {
    expect(wrapper.find('MenuItemContainer').prop('size')).toBe(size);
  });
});
