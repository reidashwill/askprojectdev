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
      <View style={styles.view}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize={'none'} style={styles.input}/>
        <TextInput
          placeholder="Password"
          value={password}
          onChangetext={setPassword} style={styles.input}/>
        <Button title="Sign In">onPress={signIn}</Button>       
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
    backgroundColor: "#790979",
    width: "100%",
    height: windowHeight,
  }
})

export default SignInScreen