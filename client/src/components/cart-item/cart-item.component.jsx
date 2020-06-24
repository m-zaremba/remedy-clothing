import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  CartItemContainer,
  ItemImage,
  ItemDetailsContainer,
  ItemName,
  ItemPrice,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <ItemName>{name}</ItemName>
        <ItemPrice className="price">
          {quantity} x ${price}
        </ItemPrice>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default memo(CartItem);
