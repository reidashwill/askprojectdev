import React, { useState, useMemo, createContext } from 'react';
import SignUpScreen from "./screens/auth/SignUpScreen";
import firebase from './firebase';





export const AuthContext = createContext();

export default () => {
  
  const authContext = useMemo(() => {
  return {
    updateUser: () => {
      const user = firebase.auth().currentUser;
    }
  };
}, []);

  return (
    <AuthContext.Provider >
      <SignUpScreen/>
    </AuthContext.Provider>
  );
}