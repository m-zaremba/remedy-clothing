import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { getUserCartRef } from '../../firebase/firebase.utils';
import userActionTypes from '../user/user.types';
import { clearCart, setFirebaseCart } from './cart.actions';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selectors';
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

export function* updateFirebaseCart() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkFirebaseCart({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setFirebaseCart(cartSnapshot.data().cartItems));
}

export function* onUserSignIn() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, checkFirebaseCart);
}

export function* onCartChange() {
  yield takeLatest(
    [cartActionTypes.ADD_ITEM, cartActionTypes.REMOVE_ITEM, cartActionTypes.CLEAR_ITEM_FROM_CART],
    updateFirebaseCart,
  );
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onPaymentSuccess),
    call(onCartChange),
    call(onUserSignIn),
  ]);
}
