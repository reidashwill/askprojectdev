import React, { useState } from 'react';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Text, 
  View, 
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import * as firebase from 'firebase';
const windowHeight = Dimensions.get('window').height;


function SignInScreen({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const signIn = (e) => {
    e.preventDefault();
    if(email.length < 4) {
      Alert.alert("Please enter a valid email address.");
      return;
    }
    if (!password.length) {
      Alert.alert("Please enter a valid password");
      return;
    }
    navigation.push("Loading");
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          if (
            error.code === "auth/wrong-password" ||
            error.code === "auth/user-not-found"
          ) {
            Alert.alert("Incorrect username or password");
          } else {
            Alert.alert(error.toString(error));
          }
          navigation.pop();
        });
    } catch {
      Alert.alert(error.toString(error));
    }
  }; 
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
        <Button title="Sign In">onPress={signIn}</Button>       
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignInScreen