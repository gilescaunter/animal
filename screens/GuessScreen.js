import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const GuessScreen = props => {


    return(
        <View style = {styles.screen}>
            <Text>
                Is it a: GUESSGOESHERE
            </Text>
            <Button title = 'Yes' />
            <Button title = 'No'/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding:20,
        flex:1
    }
});

export default GuessScreen;

