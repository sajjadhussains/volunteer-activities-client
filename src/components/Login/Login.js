import React, { useContext, useState } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const history =useHistory();
    const location=useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const googleSignIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          
            const {displayName,email} = result.user;
            const signedInUser={name:displayName,email};
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (

        <div className='d-flex justify-content-center align-items-center signInBox'>
            <h4 style={{textAlign:'center'}}>LOG IN WITH</h4><br/>
            <div onClick={googleSignIn} className='d-flex justify-content-center align-items-center googleSignIn'>
                <img src="https://i.imgur.com/Aphbf8t.png" alt="fjdksj" />
                <p>Sign In With Google</p>
            </div>
        </div>

    );
};

export default Login;