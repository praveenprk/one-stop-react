import React, { useEffect, useState } from 'react'
// import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, logoutUser } from '../../features/users/userSlicer';
import { Profile } from './Profile';
import { firebaseAppInit, authInit, providerInit } from '../../googleapis/firebaseconfig';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { saveAccessTokenToLS } from '../../localDB/helpers';

const Home = () => {
    
    const [user, setUser] = useState(null);
    const profile = useSelector(state => state.user) || localStorage.getItem("userInfo");
    let profileJson;
    const dispatch = useDispatch();
    
    if(profile)
    profileJson = JSON.parse(profile)
    // console.log(profileJson?.email)

    function clickToSignIn() {
      signInWithPopup(authInit, providerInit).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      saveAccessTokenToLS(token)
      dispatch(addUser(JSON.stringify(user.providerData[0])));
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
    }
    

  return (
    <React.Fragment>
      Home
      {
        !profileJson?.email ? <button onClick={() => clickToSignIn()}>Sign in with Google</button> : <h1>Hello {profileJson.displayName}</h1>
      }
      <br>
      </br>
      { profileJson?.email ? <button onClick={() => dispatch(logoutUser())}>Logout</button> : '' }
    </React.Fragment>
  )
}

export default Home