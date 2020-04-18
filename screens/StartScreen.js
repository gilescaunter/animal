import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const StartScreen = props => {
    return(
        <View>
            <Text>
                Think of an Animal!
            </Text>
            <Button title = 'Go'/>
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

