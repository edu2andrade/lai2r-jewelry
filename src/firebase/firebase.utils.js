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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // Firestore returns a QueryReference or a QuerySnapshot, read the documentation..
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // Cehck if the user exists...
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();

    // Create a user if they not already exists...
    try {
      await userRef.set({
        displayName,
        email,
        creatAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user -->', error);
    }
    // the try catch block fires and console log an error if any error occurs...
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Sign in with Google:
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;