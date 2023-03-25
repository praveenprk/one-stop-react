import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/users/userSlicer';
import { googleLogout } from '@react-oauth/google';


export const Profile = () => {
    
    const dispatch = useDispatch();

    const logOut = () => {
        googleLogout();
        dispatch(logoutUser(null))
    };

  return (
    <div>
        <br/>
        <button onClick={() => logOut()}>Log out</button>
    </div>
  )
}