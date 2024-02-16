"use client";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import app from "../config/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const GoogleProvider = new GoogleAuthProvider();

  // sign up
  const createUser = (email, Password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, Password);
  };

  // sign out
  const logOut = () => {
    signOut(auth);
  };

  // sign in
  const logIn = (email, Password) => {
    return signInWithEmailAndPassword(auth, email, Password);
  };

  // google sign in
  const googleLogin = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  // update
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const updateUserPassword=(user, newPassword)=>{
    return updatePassword(user, newPassword)

  }

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logOut,
    logIn,
    googleLogin,
    updateUserProfile,
    updateUserPassword
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
