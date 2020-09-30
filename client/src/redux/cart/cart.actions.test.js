import CartActionTypes from './cart.types';
import {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItemFromCart,
  clearCart,
} from './cart.actions';

describe('testing toggleCartHidden action', () => {
  it('should run the toggleCartHidden action', () => {
    expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
  });
});

describe('testing addItem action', () => {
  it('should fire the addItem action', () => {
    const mockItem = {
      id: 1,
    };

    expect(addItem(mockItem).type).toEqual(CartActionTypes.ADD_ITEM);
    expect(addItem(mockItem).payload).toEqual(mockItem);
  });
});

describe('testing removeItem action', () => {
  it('should run the removeItem action', () => {
    const mockItem = {
      id: 1,
    };

    expect(removeItem(mockItem).type).toEqual(CartActionTypes.REMOVE_ITEM);
    expect(removeItem(mockItem).payload).toEqual(mockItem);
  });
});

describe(' testing clearItemFromCart action', () => {
  it('should run the clearItemFromCart action', () => {
    const mockItem = {
      id: 1,
    };

    expect(clearItemFromCart(mockItem).type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
    expect(clearItemFromCart(mockItem).payload).toEqual(mockItem);
  });
});

describe('testing clearCart action', () => {
  it('should run the clearCart action', () => {
    expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
  });
});
