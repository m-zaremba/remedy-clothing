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

export default firebase;
