import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';

export default function App() {
  return (
    <StartScreen></StartScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});