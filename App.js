import React, { useState, useMemo, createContext } from 'react';
import SignUpScreen from "./screens/auth/SignUpScreen";
import * as firebase from 'firebase';




export default () => {
  const auth = firebase.auth();
  return (
    <>
    <SignUpScreen/>
    </>
  );
}