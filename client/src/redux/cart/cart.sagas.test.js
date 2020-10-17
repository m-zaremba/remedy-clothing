import { takeLatest, put } from 'redux-saga/effects';

import userActionTypes from '../user/user.types';
import cartActionTypes from './cart.types';
import { clearCart } from './cart.actions';
import {
  clearCartOnSignOutOrPaymentSuccess,
  onSignOutSuccess,
  onPaymentSuccess,
} from './cart.sagas';

describe('testing onSignOutSuccess saga', () => {
  it('should fire on SIGN_OUT_SUCCESS', async () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutOrPaymentSuccess),
    );
  });
});

describe('testing onPaymentSuccess saga', () => {
  it('should fire on PAYMENT_SUCCESS', async () => {
    const generator = onPaymentSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(cartActionTypes.PAYMENT_SUCCESS, clearCartOnSignOutOrPaymentSuccess),
    );
  });
});

describe('testing clear cart onSignOut saga', () => {
  it('should fire clearCart', () => {
    const generator = clearCartOnSignOutOrPaymentSuccess();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});
