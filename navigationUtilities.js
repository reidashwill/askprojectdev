import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import SignInScreen from './screens/auth/SignInScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import TempLanding from './screens/auth/TempLanding';

const AuthStack = createStackNavigator();

const EntryPoint = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="SignIn"
          component={SignInScreen} />
        <AuthStack.Screen
          name="SignUp"
          component={SignUpScreen} />
        <AuthStack.Screen
          name="TempLanding"
          component={TempLanding} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default EntryPoint;