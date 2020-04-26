/* eslint-disable no-alert */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { paymentSuccess } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, paymentSuccess }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment successful');
        paymentSuccess();
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        alert('Payment unsuccessful. Pleas use provided credit card credentials');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="REMEDY CLTH"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  paymentSuccess: () => dispatch(paymentSuccess()),
});

StripeCheckoutButton.propTypes = {
  price: PropTypes.number.isRequired,
  paymentSuccess: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
