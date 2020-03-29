import React from 'react';
import './cart-item.styles.scss';
import PropTypes from 'prop-types';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
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

export default CartItem;
