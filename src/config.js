import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA1e63rwqOY0uC7wkhZxj1cXykR_h-ZnPE',
  authDomain: 'leek-14509.firebaseapp.com',
  projectId: 'leek-14509',
  storageBucket: 'leek-14509.appspot.com',
  messagingSenderId: '921404501955',
  appId: '1:921404501955:web:415dda0acb6b590e4cd776',
  measurementId: 'G-8RJKM3VLR7',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { firebase, db };
