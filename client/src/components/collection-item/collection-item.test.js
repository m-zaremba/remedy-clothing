import React from 'react';
import { shallow } from 'enzyme';

import { CollectionItem } from './collection-item.component';

describe('testing CollectionItem component', () => {
  let wrapper;
  let mockAddItem;
  const mockImageUrl = 'www.testImage.com';
  const mockName = 'black hat';
  const mockPrice = 10;

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: mockImageUrl,
        price: mockPrice,
        name: mockName,
      },
      addItem: mockAddItem,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addItem on AddButton click', () => {
    wrapper.find('AddButton').simulate('click');

    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should pass imageUrl as a prop to BackgroundImage component', () => {
    expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(mockImageUrl);
  });

  it('should render name value in NameContainer', () => {
    expect(wrapper.find('FooterItemName').text()).toBe(mockName);
  });

  it('should render price value in PriceContainer', () => {
    const price = Number(wrapper.find('FooterItemPrice').text());
    expect(price).toBe(mockPrice);
  });
});
