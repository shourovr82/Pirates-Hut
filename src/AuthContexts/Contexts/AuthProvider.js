import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider();


  const registerNewAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (userDetails) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: userDetails.displayName,
      photoURL: userDetails.photoURL
    })
  }

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }



  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }





  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)

  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })

    return () => unsubscribe();
  }, [])


  const authInfo = {
    googleLogin,
    user,
    loading,
    logOut,
    registerNewAccount,
    updateUserProfile,
    loginUser,

  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;