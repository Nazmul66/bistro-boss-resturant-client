import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null);

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
              setLoading(false)
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