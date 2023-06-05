import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import axios from 'axios';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    // ata true false ar upor fact na just, fact holo State jotober change hobe setar upor.
    // const [change, setChange] = useState(true);

    // // State take change korar jonno fetch take abr refetch koranu hoyese.
    // // And refetch korar jonno arekta way system ashe seta mileston-12 module 77-4 a
    // const myRefetch = () =>{
    //    return setChange(!change);
    // } 

    // create user
     const createUserInfo = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }

    // signIn user
    const signInUser = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuth change state
     useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, changeState =>{
              setUserInfo(changeState);

              // get and set token
              if(changeState){
                 axios.post("http://localhost:4000/jwt", {email: changeState.email})
                 .then(data => {
                    // console.log(data.data.token)
                    localStorage.setItem("access_token", data.data.token);     
                    setLoading(false);
                 })
              }
              else{
                  localStorage.removeItem("access_token");
                  setLoading(false);
              }
        })
        return () =>{
            return unSubscribe();
        }
     }, [])

     // googleSignIn
    const googleSignIn = () =>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider);
    }

    // sign out
    const userOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const allAuth = {
        userInfo,
        createUserInfo,
        signInUser,
        googleSignIn,
        userOut,
        loading
    }

    return (
       <AuthContext.Provider value={allAuth}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;