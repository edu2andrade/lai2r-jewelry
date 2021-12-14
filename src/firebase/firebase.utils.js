import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAgw5WQQ3kkfwFq48kERah68I1N_UhCxgs",
  authDomain: "lai2r-db.firebaseapp.com",
  projectId: "lai2r-db",
  storageBucket: "lai2r-db.appspot.com",
  messagingSenderId: "774346795324",
  appId: "1:774346795324:web:d7af3c3fadbf59c9529639",
  measurementId: "G-VV3FRK2QXG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;