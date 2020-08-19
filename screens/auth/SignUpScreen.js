import React, {useState, useContext } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
} from "react-native";
// import {AuthContext } from '../../App';
import firebase from '../../firebase';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// function SignUpScreen(){

//     const signUp = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });

function SignUpScreen() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  
  async function signUp(e) {
  try{
    
    
      e.preventDefault();

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    
  } catch (error) {
    Alert.alert("Error: ", error.message)
  }
}
  

  return(
    <KeyboardAwareScrollView
    style={{
      flex: 1,
    }}>
      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize={'none'}/>
        <TextInput
          placeholder="Password"
          value={password}
          onChangetext={setPassword}/>
        <Button title="Sign up" onPress={signUp}/>  
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignUpScreen
