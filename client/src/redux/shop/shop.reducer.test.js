import shopActionTypes from './shop.types';
import shopReducer from './shop.reducer';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

describe('testing shopReducer', () => {
  it('should return initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isFetching state to true if fetchingCollectionsStart action was triggered', () => {
    expect(
      shopReducer(initialState, {
        type: shopActionTypes.FETCH_COLLECTIONS_START,
      }).isFetching,
    ).toBe(true);
  });

  it('should set isFetching state to false and collections to payload if fetchingCollectionsSuccess', () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    expect(
      shopReducer(initialState, {
        type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: mockItems,
      }),
    ).toEqual({
      ...initialState,
      isFetching: false,
      collections: mockItems,
    });
  });

  it('should set isFetching state to false and errorMessage to payload if fetchingCollectionsFailure fires', () => {
    expect(
      shopReducer(initialState, {
        type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: 'error',
      }),
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'error',
    });
  });
});
