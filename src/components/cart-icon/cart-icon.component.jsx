import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div
      role="button"
      className="cart-icon"
      onClick={toggleCartHidden}
      onKeyDown={toggleCartHidden}
      tabIndex={0}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CartIcon);
