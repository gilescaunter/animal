import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const GuessScreen = props => {


    return(
        <View style = {styles.screen}>
            <Text>
                {props.guessQuestion}
            </Text>
            <View style = {styles.button}>
                <Button title = 'Yes' onPress = {props.onYesHandler}/>
                <Button title = 'No' onPress = {props.onNoHandler}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding:20,
        flex:1
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default GuessScreen;

