import React, { useEffect, useState } from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, logoutUser } from '../../features/users/userSlicer';
import { Profile } from './Profile';

const Home = () => {

    const [user, setUser] = useState(null);
    const profile = useSelector(state => state.user)
    console.log(profile);
    const dispatch = useDispatch();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
              console.log(user);
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                      console.log(`res`,res);
                        dispatch(addUser(res.data));
                        
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    

  return (
    <React.Fragment>
      Home
      <br/>
    {
      profile ? <Profile /> : <button onClick={() => login() }>Sign in with Google 🚀 </button>
    }
    </React.Fragment>
  )
}

export default Home