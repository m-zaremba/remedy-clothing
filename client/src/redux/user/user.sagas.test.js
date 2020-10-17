import { takeLatest, put, call } from 'redux-saga/effects';
import userActionTypes from './user.types';

import { signInFailure, signOutSuccess, signOutFailure } from './user.actions';

import { auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

import {
  getSnapshotFromUserAuth,
  signInWithGoogle,
  signInWithEmail,
  isUserAuthenticated,
  signOut,
  signUp,
  signInAfterSignUp,
  onGoogleSignInStart,
  onEmailSignInStart,
  onCheckUserSession,
  onSignOutStart,
  onSignUpStart,
  onSignUpSuccess,
} from './user.sagas';

describe('testing on signup success saga', () => {
  it('should trigger on SIGN_UP_SUCCESS', () => {
    const generator = onSignUpSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp),
    );
  });
});

describe('testing on signup start saga', () => {
  it('should trigger on SIGN_UP_START', () => {
    const generator = onSignUpStart();
    expect(generator.next().value).toEqual(takeLatest(userActionTypes.SIGN_UP_START, signUp));
  });
});

describe('testing on sign out start saga', () => {
  it('should trigger on SIGN_UP_START', () => {
    const generator = onSignOutStart();
    expect(generator.next().value).toEqual(takeLatest(userActionTypes.SIGN_OUT_START, signOut));
  });
});

describe('testing on check user session saga', () => {
  it('should trigger on CHECK_USER_SESSION', () => {
    const generator = onCheckUserSession();
    expect(generator.next().value).toEqual(
      takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated),
    );
  });
});

describe('testing on email sign in start saga', () => {
  it('should trigger on EMAIL_SIGN_IN_START', () => {
    const generator = onEmailSignInStart();
    expect(generator.next().value).toEqual(
      takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail),
    );
  });
});

describe('testing on google sign in start saga', () => {
  it('should trigger on GOOGLE_SIGN_IN_START', () => {
    const generator = onGoogleSignInStart();
    expect(generator.next().value).toEqual(
      takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle),
    );
  });
});

describe('testing on sign in after sign up saga', () => {
  it('should fire getSnapshotFromUserAuth', () => {
    const mockUser = {};
    const mockAdditionalData = {};
    const mockAction = {
      payload: {
        user: mockUser,
        additionalData: mockAdditionalData,
      },
    };

    const generator = signInAfterSignUp(mockAction);
    expect(generator.next().value).toEqual(getSnapshotFromUserAuth(mockUser, mockAdditionalData));
  });
});

describe('testing on sign up saga', () => {
  const mockEmail = 'test_mail@gmail.com';
  const mockPassword = 'testPassword';
  const mockDisplayName = 'testUser';

  const mockAction = {
    payload: {
      email: mockEmail,
      password: mockPassword,
      displayName: mockDisplayName,
    },
  };

  const generator = signUp(mockAction);

  it('should call auth.createUserWithEmailAndPassword', () => {
    const createUserWithEmailAndPassword = jest.spyOn(auth, 'createUserWithEmailAndPassword');
    generator.next();
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe('testing on sign out saga', () => {
  const generator = signOut();

  it('should call auth.signOut', () => {
    const expectSignOut = jest.spyOn(auth, 'signOut');
    generator.next();
    expect(expectSignOut).toHaveBeenCalled();
  });

  it('should call signOutSuccess', () => {
    expect(generator.next().value).toEqual(put(signOutSuccess()));
  });

  it('should call signOutFailure on error', () => {
    const newGenerator = signOut();
    newGenerator.next();
    expect(newGenerator.throw('error').value).toEqual(put(signOutFailure('error')));
  });
});

describe('testing is user authenticated saga', () => {
  const generator = isUserAuthenticated();

  it('should call getCurrentUser', () => {
    expect(generator.next().value).toEqual(getCurrentUser());
  });

  it('should call getSnapshotFromUserAuth if userAuth exists', () => {
    const mockUserAuth = { uid: 'qwertyuiop' };
    expect(generator.next(mockUserAuth).value).toEqual(getSnapshotFromUserAuth(mockUserAuth));
  });

  it('should call signInFailure on error', () => {
    const newGenerator = isUserAuthenticated();
    newGenerator.next();
    expect(newGenerator.throw('error').value).toEqual(put(signInFailure('error')));
  });
});

describe('testing get snapshot from userAuth', () => {
  const mockUserAuth = {};
  const mockAdditionalData = {};
  const generator = getSnapshotFromUserAuth(mockUserAuth, mockAdditionalData);

  expect(generator.next().value).toEqual(
    call(createUserProfileDocument, mockUserAuth, mockAdditionalData),
  );
});
