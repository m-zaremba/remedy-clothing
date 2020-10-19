import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPreview } from './collection-preview.component';

describe('testing CollectionPreview component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const mockRouteName = 'mens';

  beforeEach(() => {
    mockMatch = {
      path: '/shop',
    };

    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      routeName: mockRouteName,
      title: 'mens',
      items: [],
    };

    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  it('should render CollectionPreview component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push with the right string when Title clicked', () => {
    wrapper.find('TitleButton').simulate('click');

    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.path}/${mockRouteName}`);
  });
});
