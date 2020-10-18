import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  Name,
  Price,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt="item" />
      </CheckoutImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow
          onClick={() => removeItem(cartItem)}
          onKeyDown={() => removeItem(cartItem)}
          role="button"
          tabIndex={0}
        >
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow
          onClick={() => addItem(cartItem)}
          onKeyDown={() => addItem(cartItem)}
          role="button"
          tabIndex={0}
        >
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton
        onClick={() => clearItem(cartItem)}
        onKeyDown={() => clearItem(cartItem)}
        role="button"
        tabIndex={0}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  clearItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
