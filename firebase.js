// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5-460SXXCQJQTHKIMCK7yhJLJUC5sMXQ",
  authDomain: "bolster-cdc48.firebaseapp.com",
  projectId: "bolster-cdc48",
  storageBucket: "bolster-cdc48.appspot.com",
  messagingSenderId: "661679163464",
  appId: "1:661679163464:web:fbbbcf25efad5d9841707d",
  measurementId: "G-DJ3GLMQ36J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage};