import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const AddScreen = props => {


    return(
        <View style = {styles.screen}>
            <Text>
                What makes this animal different from a guess animal
            </Text>
            <TextInput />
            <Button title = 'New Game' />
            <Button title = 'Quit Game'/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1
    }
});

export default AddScreen;

