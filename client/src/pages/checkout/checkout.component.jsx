import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalPrice,
  WarningInfo,
} from './checkout.styles';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const Checkout = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalPrice>
        <span>TOTAL: ${total}</span>
      </TotalPrice>
      <StripeCheckoutButton price={total} />
      <WarningInfo>
        PLEASE USE THE FOLLOWING CREDENTIALS FOR TEST PAYMENTS
        <br />
        Card number: 4242 4242 4242 4242
        <br />
        EXP: 01/21
        <br />
        CVV: 123
      </WarningInfo>
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

Checkout.defaultProps = {
  cartItems: PropTypes.array,
};

Checkout.propTypes = {
  total: PropTypes.number.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(Checkout);
