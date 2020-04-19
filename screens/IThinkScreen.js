import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const IThinkScreen = props => {


    return(
        <View style = {styles.screen}>
            <Text>
                I think it is a : {props.theGuess}
                
                Am I right?
            </Text>

            <Button title = 'Yes' onPress = {props.onYesHandler}/>
            <Button title = 'No' onPress = {props.onNoHandler}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:20
    }
});

export default IThinkScreen;

