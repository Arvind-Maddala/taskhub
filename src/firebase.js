import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGCl088wQeMXIFkZRHFOnD2PZPk_asOsM",
  authDomain: "taskhub-fda3d.firebaseapp.com",
  projectId: "taskhub-fda3d",
  storageBucket: "taskhub-fda3d.appspot.com",
  messagingSenderId: "265095820166",
  appId: "1:265095820166:web:8cce52bb2f09b479583207"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFaceBook = new firebase.auth.FacebookAuthProvider();


export {db, auth, providerGoogle, providerFaceBook, storage};