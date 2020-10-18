import React from 'react';
import { shallow } from 'enzyme';

import { CartItem } from './cart-item.component';

describe('testing CartItem component', () => {
  it('should render CartItem component', () => {
    const mockItem = {
      imageUrl: 'www.testURL.com',
      name: 'testItem',
      price: 10,
      quantity: 1,
    };
    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
  });
});
