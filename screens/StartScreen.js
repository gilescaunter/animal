import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const StartScreen = props => {


    return(
        <View style = {styles.screen}>
            <Text>
                Think of an Animal!
            </Text>
            <Button title = 'Go' onPress = {props.onGoHandler}/>
            <Button title = 'Quit'/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1
    }
});

export default StartScreen;

