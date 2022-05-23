import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getDatabase } from "firebase/database"

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBsyJmkfXpXFBdMAgsj7E-nW4Z4k1im4GQ",
  authDomain: "mern-project-2ab73.firebaseapp.com",
  projectId: "mern-project-2ab73",
  storageBucket: "mern-project-2ab73.appspot.com",
  messagingSenderId: "188343482767",
  appId: "1:188343482767:web:c3d514dc4f8e1ce54773fa"
});

var db = firebaseApp.firestore();

export const database = getDatabase(firebaseApp);
export { db };
export const auth=firebaseApp.auth();