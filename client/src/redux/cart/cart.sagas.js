import { all, call, put, takeLatest } from 'redux-saga/effects';

import userActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';
import cartActionTypes from './cart.types';

export function* clearCartOnSignOutOrPaymentSuccess() {
  yield put(clearCart());
}

export function* onPaymentSuccess() {
  yield takeLatest(cartActionTypes.PAYMENT_SUCCESS, clearCartOnSignOutOrPaymentSuccess);
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutOrPaymentSuccess);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onPaymentSuccess)]);
}
