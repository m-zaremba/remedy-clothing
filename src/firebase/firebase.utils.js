import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCvG46Rr2-wggyuj6yNkt8KYBSPJmJTv1c',
  authDomain: 'remedy-cloth-db.firebaseapp.com',
  databaseURL: 'https://remedy-cloth-db.firebaseio.com',
  projectId: 'remedy-cloth-db',
  storageBucket: 'remedy-cloth-db.appspot.com',
  messagingSenderId: '636812800639',
  appId: '1:636812800639:web:6d74078df113e3e53d854a',
  measurementId: 'G-WN41W8KMXG',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return null;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
