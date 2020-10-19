import React from 'react';
import { shallow } from 'enzyme';
import { CollectionsOverview } from './collections-overview.component';

describe('testing CollectionsOverview component', () => {
  it('should render CollectionsOverview component', () => {
    expect(shallow(<CollectionsOverview collections={[]} />)).toMatchSnapshot();
  });
});
