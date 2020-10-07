import userActionTypes from './user.types';
import {
  googleSignInStart,
  signInSuccess,
  signInFailure,
  emailSignInStart,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
} from './user.actions';

describe('test googleSignInStart action', () => {
  it('should run googleSignInStart action', () => {
    expect(googleSignInStart().type).toEqual(userActionTypes.GOOGLE_SIGN_IN_START);
  });
});

describe('test signInSuccess action', () => {
  it('should run signInSuccess action', () => {
    const mockUser = {
      id: 1,
    };

    expect(signInSuccess().type).toEqual(userActionTypes.SIGN_IN_SUCCESS);
    expect(signInSuccess(mockUser).payload).toEqual(mockUser);
  });
});

describe('test signInFailure action', () => {
  it('should run signInFailure action', () => {
    const mockErrorMessage = 'error';

    expect(signInFailure().type).toEqual(userActionTypes.SIGN_IN_FAILURE);
    expect(signInFailure(mockErrorMessage).payload).toEqual('error');
  });
});

describe('test emailSignInStart action', () => {
  const mockEmailAndPassword = {
    email: 'testemail@gmail.com',
    password: 'password',
  };

  it('should run emailSignInStart action', () => {
    expect(emailSignInStart().type).toEqual(userActionTypes.EMAIL_SIGN_IN_START);
    expect(emailSignInStart(mockEmailAndPassword).payload).toEqual(mockEmailAndPassword);
  });
});

describe('test checkUserSession action', () => {
  it('should run checkUserSession action', () => {
    expect(checkUserSession().type).toEqual(userActionTypes.CHECK_USER_SESSION);
  });
});

describe('test signOutStart action', () => {
  it('should run signOutStart action', () => {
    expect(signOutStart().type).toEqual(userActionTypes.SIGN_OUT_START);
  });
});

describe('test signOutSuccess action', () => {
  it('should run signOutSuccess action', () => {
    expect(signOutSuccess().type).toEqual(userActionTypes.SIGN_OUT_SUCCESS);
  });
});

describe('test signOutFailure action', () => {
  const mockSIgnOutError = 'sign out error';

  it('should run signOutFailure action', () => {
    expect(signOutFailure().type).toEqual(userActionTypes.SIGN_OUT_FAILURE);
    expect(signOutFailure(mockSIgnOutError).payload).toEqual(mockSIgnOutError);
  });
});

describe('test signUpStart action', () => {
  const mockUserCredentials = {
    email: 'testemail@gmail.com',
    password: 'password',
  };

  it('should run signUpStart action', () => {
    expect(signUpStart().type).toEqual(userActionTypes.SIGN_UP_START);
    expect(signUpStart(mockUserCredentials).payload).toEqual(mockUserCredentials);
  });
});

describe('test signUpFailure action', () => {
  const mockError = 'sign up failure';

  it('should run signUpFailure action', () => {
    expect(signUpFailure().type).toEqual(userActionTypes.SIGN_UP_FAILURE);
    expect(signUpFailure(mockError).payload).toEqual('sign up failure');
  });
});
