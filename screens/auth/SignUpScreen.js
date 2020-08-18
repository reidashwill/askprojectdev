import React, {useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Alert,
  Dimensions,
} from "react-native";
import {AuthContext } from '../../App';
import * as firebase from 'firebase';

// function SignUpScreen(){

//     const signUp = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });

function SignUpScreen() {
  const { updateUser } = useContext(AuthContext);
  // const [ firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  try{
    
    async function signUp(e) {
      e.preventDefault();

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    }
  } catch (error) {
    Alert.alert("Error: ", error.message)
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
        <Button title="Sign In">onPress={signUp}</Button>       
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignUpScreen
