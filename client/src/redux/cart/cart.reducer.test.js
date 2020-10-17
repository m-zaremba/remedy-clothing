import cartActionTypes from './cart.types';
import cartReducer from './cart.reducer';

const initialState = {
  hidden: true,
  cartItems: [],
};

describe('testing cartReducer', () => {
  it('should return initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it('should toggle hidden state with toggleHidden action', () => {
    expect(cartReducer(initialState, { type: cartActionTypes.TOGGLE_CART_HIDDEN }).hidden).toBe(
      false,
    );
  });

  it('should increase by 1 quantity of matching item if addItem action is fired with the same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: cartActionTypes.ADD_ITEM,
        payload: mockItem,
      }).cartItems[0].quantity,
    ).toBe(4);
  });

  it('should decrease by 1 quantity of matching item if removeItem action is fired with the same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: cartActionTypes.REMOVE_ITEM,
        payload: mockItem,
      }).cartItems[0].quantity,
    ).toBe(2);
  });

  it('should remove the item from cart if clearItemFromCart action is fired with payload of existing item', () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: cartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem,
      }).cartItems.includes((item) => item.id === 1),
    ).toBe(false);
  });

  it('should clear the cart of all items if clearCart action is fired', () => {
    const mockPrevState = {
      hidden: true,
      cartItems: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    };

    expect(
      cartReducer(mockPrevState, {
        type: cartActionTypes.CLEAR_CART,
      }).cartItems.length,
    ).toBe(0);
  });
});
