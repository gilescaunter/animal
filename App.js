import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';

export default function App() {


  


  const onGoHandler = () => {
    content = <Text>Pressed Go</Text>;
    console.log('Pressed Go!');
  };

  let content = <StartScreen onGoHandler = {onGoHandler}/>;

  return (
    content
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
