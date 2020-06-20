import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => (
  <div
    className="cart-icon"
    role="button"
    tabIndex={0}
    onClick={toggleCartHidden}
    onKeyDown={toggleCartHidden}
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItemsCount}</span>
  </div>
);

export default CartIcon;
