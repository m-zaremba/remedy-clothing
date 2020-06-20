import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { flowRight } from 'lodash';

import CartIcon from './cart-icon.component';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS_COUNT = gql`
  {
    cartItemsCount @client
  }
`;

const CartIconContainer = ({ data: { cartItemsCount }, toggleCartHidden }) => (
  <CartIcon toggleCartHidden={toggleCartHidden} cartItemsCount={cartItemsCount} />
);

export default flowRight(
  graphql(GET_CART_ITEMS_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' }),
)(CartIconContainer);
