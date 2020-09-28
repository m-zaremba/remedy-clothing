import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPage } from './collection.component';
import CollectionItem from '../../components/collection-item/collection-item.component';

describe('CollectionPage', () => {
  let wrapper;
  const mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'test collections',
    };

    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  it('should render the CollectionPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the same number of CollectionItems as mockItems array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });
});
