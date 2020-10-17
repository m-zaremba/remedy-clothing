import userActionTypes from './user.types';
import userReducer from './user.reducer';

const initialState = {
  currentUser: null,
  error: null,
};

describe('testing userReducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should set currentUser to payload on signInSuccess action', () => {
    const mockUser = { id: 1, displayName: 'TestUser' };

    expect(
      userReducer(initialState, {
        type: userActionTypes.SIGN_IN_SUCCESS,
        payload: mockUser,
      }).currentUser,
    ).toEqual(mockUser);
  });

  it('should set currentUser to null on signOutSuccess action', () => {
    expect(
      userReducer(initialState, {
        type: userActionTypes.SIGN_OUT_SUCCESS,
      }).currentUser,
    ).toBe(null);
  });

  it('should set errorMessage to payload on signInFailure, signUpFailure and signOutFailure action', () => {
    const mockError = {
      message: 'error',
      code: 404,
    };

    expect(
      userReducer(initialState, {
        type: userActionTypes.SIGN_IN_FAILURE,
        payload: mockError,
      }).error,
    ).toBe(mockError);

    expect(
      userReducer(initialState, {
        type: userActionTypes.SIGN_UP_FAILURE,
        payload: mockError,
      }).error,
    ).toBe(mockError);

    expect(
      userReducer(initialState, {
        type: userActionTypes.SIGN_OUT_FAILURE,
        payload: mockError,
      }).error,
    ).toBe(mockError);
  });
});
