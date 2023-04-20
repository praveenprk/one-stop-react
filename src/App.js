import Header from './partials/header/Header';
import Footer from './partials/footer/Footer';
import './App.css';
import { useDispatch } from 'react-redux';
import { initAppDB } from './features/todo/todoSlicer';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { addUser } from './features/users/userSlicer';


function App() {

  const dispatch = useDispatch();
  dispatch(initAppDB());

  // Firebase config
  // TODO: Move this to env variables or somewhere secure
  const firebaseConfig = {
    apiKey: "AIzaSyDPv6Q4WOTze40mdLuYNes4LnO7HHykQtU",
    authDomain: "daily-digitals.firebaseapp.com",
    databaseURL: "https://daily-digitals-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "daily-digitals",
    storageBucket: "daily-digitals.appspot.com",
    messagingSenderId: "440898773056",
    appId: "1:440898773056:web:ca9b56292f8c39e3863fa5",
    measurementId: "G-Z8WPSRE2Y2"
  };
  
  //init firebase instance
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  provider.addScope('https://www.googleapis.com/auth/calendar');

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(`result:`, user.providerData);
    localStorage.setItem("access_token", token);
    dispatch(addUser(user));
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  const login = (res) => {
    console.log(`res, `, res);
  }

  
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;