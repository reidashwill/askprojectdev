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
// import firebase from '../../firebase';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as firebase from "firebase";
import { AuthContext } from "../../App";
const windowHeight = Dimensions.get('window').height;

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
      <View style={styles.view}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize={'none'} style={styles.input}/>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize={'none'} style={styles.input}/>
        <Button title="Sign up" onPress={signUp}/>  
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 40,
    borderColor: "#DDE2E4",
    borderWidth: 2,
    margin: 13,
    width: 200,
    alignItems: "center",
    textAlign: "center",
    color: "black",
    fontSize: 15,
  },
  view: {
    padding: 50,
    alignItems: "center",
    backgroundColor: "rgba(16,16,16,0.4)",
    width: "100%",
    height: windowHeight,
  }
})

export default SignUpScreen
