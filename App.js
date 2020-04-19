import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import GuessScreen from './screens/GuessScreen';
import SuccessScreen from './screens/SuccessScreen';
import AddScreen from './screens/AddScreen';
import IThinkScreen from './screens/IThinkScreen';
import AnimalData from './data/AnimalData';

export default function App() {


  
  const [gameState, setGameState] = useState('start');
  const [gameRunning, setGameRunning] = useState(false);
  const [guessedAnimal, setGuessedAnimal] = useState('Elk');
  const [success, setSuccess] = useState(false);
  const [guessQuestion, setGuessQuestion] = useState('Does it have legs');
  const [currentNode, setCurrentNode] = useState(AnimalData.root);
  const [iThink, setIThink] = useState(false);

  console.log(currentNode);

  const onGoHandler = () => {
    
    setGameRunning(true);
    setGuessQuestion(currentNode.question);
    setGuessedAnimal(currentNode.yes); 
    setGameState('guess');
    console.log('Pressed Go!');
    setIThink(false);
  };

  const nextNode = (lookup) => {
    return (AnimalData[lookup]);
  };

  const onYesHandler = () => {
    console.log('YesHandler');
    console.log(currentNode);


    if (currentNode.answer === currentNode.yes && gameState === 'ithink') {
      setSuccess(true);
      setGameState('success');
    } else {
      if (iThink === false) {
        setCurrentNode(nextNode(currentNode.yes));
        setGuessQuestion(currentNode.question);
        setGuessedAnimal(currentNode.yes);
        setIThink(true);} else {
        setGameState('ithink');
      }
    };
  };

  const onNoHandler = () => {
    console.log('No Handler');
    console.log(currentNode);
    if (currentNode.no === 'add') {
      console.log('Add a new entry');
      setGameState('add');

    } else {
      setCurrentNode(nextNode(currentNode.no));
      setGuessQuestion(currentNode.question);
      setGuessedAnimal(currentNode.no);
    }
  }

  const onNewHandler = () => {
    setSuccess(false);
    setCurrentNode(nextNode('root'));
    console.log('New Handler');
    console.log(currentNode);
    setGameState('start');
  }

  const onExitHandler = () => {
    setGameRunning(false);
  }

  let content = <StartScreen onGoHandler = {onGoHandler}/>;

  if (gameState === 'guess') {
    console.log('State to guess');
    console.log(currentNode);
    content = <GuessScreen 
    guessQuestion = {currentNode.question}
    onYesHandler = {onYesHandler} 
    onNoHandler = {onNoHandler}/>
  }

  if (gameState === 'add') {
    content = <AddScreen/>
  }

  if (gameState === 'ithink') {
    content = <IThinkScreen theGuess = {guessedAnimal} onYesHandler={onYesHandler} onNoHandler={onNoHandler}/>
  }

  if (gameState === 'success') {
    content = <SuccessScreen theGuess = {guessedAnimal} onNewHandler = {onNewHandler} onExitHandler = {onExitHandler}/>
  }

  return (
    <View style = {styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
});
