import React, { useState, useMemo, createContext } from 'react';
import SignUpScreen from "./screens/auth/SignUpScreen";
import firebase from './firebase';




export default () => {
  const auth = firebase.auth();
  return (
    <>
    <SignUpScreen/>
    </>
  );
}