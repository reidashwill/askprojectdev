import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Here we go!</Text>
      <StatusBar style="auto" />
    </View>
  );
}