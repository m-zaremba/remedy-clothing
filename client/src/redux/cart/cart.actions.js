import cartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});

export const paymentSuccess = () => ({
  type: cartActionTypes.PAYMENT_SUCCESS,
});

export const updateFirebaseCart = () => ({
  type: cartActionTypes.UPDATE_FIREBASE_CART,
});

export const setFirebaseCart = (cartItems) => ({
  type: cartActionTypes.SET_FIREBASE_CART,
  payload: cartItems,
});
