import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const AddScreen = props => {

    const[guessName, setGuessName] = useState('');
    const[guessQuestion, setGuessQuestion] = useState('');

    const guessNameInputHandler = inputText => {
        setGuessName(inputText);
    };

    return(
        <View style = {styles.screen}>
            <Text>
                What makes this animal different from a guess animal
            </Text>

            <TextInput style={styles.input} blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    onChangeText = {guessNameInputHandler}
                    value = {guessName}
            />
            <Button title = 'New Game' />
            <Button title = 'Quit Game'/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:20
    }
});

export default AddScreen;

