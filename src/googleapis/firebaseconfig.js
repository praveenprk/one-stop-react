import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyDPv6Q4WOTze40mdLuYNes4LnO7HHykQtU",
    authDomain: "daily-digitals.firebaseapp.com",
    databaseURL: "https://daily-digitals-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "daily-digitals",
    storageBucket: "daily-digitals.appspot.com",
    messagingSenderId: "440898773056",
    appId: "1:440898773056:web:ca9b56292f8c39e3863fa5",
    measurementId: "G-Z8WPSRE2Y2"
  };


  export const firebaseAppInit = initializeApp(firebaseConfig);

  export const authInit = getAuth(firebaseAppInit);

  export const providerInit = new GoogleAuthProvider();

  providerInit.addScope('https://www.googleapis.com/auth/calendar');