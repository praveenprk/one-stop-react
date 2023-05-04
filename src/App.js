import Header from './partials/header/Header';
import Footer from './partials/footer/Footer';
import './App.css';
import { useDispatch } from 'react-redux';
import { initAppDB } from './features/todo/todoSlicer';
import { useEffect, useState } from 'react';
import { addUser } from './features/users/userSlicer';
import { authInit } from './googleapis/firebaseconfig';


function App() {

  const dispatch = useDispatch();
  
  dispatch(initAppDB());

  setTimeout(function(){
    authInit.onAuthStateChanged((user) => {
      user?.getIdToken()
      .then(res => {
        console.log(`at from onauthstatechanged:`,res);
        localStorage.setItem("access_token", res)
        })
      .catch(err => console.log(`error on state changed:`, err))
    },(err) => console.log(`error on auth changed:`, err));

}, 1000 * 60 * 60); //one hour

  const login = (res) => {
    console.log(`res, `, res);
  }

  
  return (
    <div className="App container">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;