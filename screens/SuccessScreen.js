import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SuccessScreen = props => {


    return(
        <View style = {styles.screen}>
            <Text>
                I guessed : {props.theGuess}
            </Text>
            <Text>
                Picture of Animal goes here
            </Text>
            <Button title = 'New' onPress = {props.onNewHandler}/>
            <Button title = 'Exit' onPress = {props.onExitHandler}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:20
    }
});

export default SuccessScreen;

