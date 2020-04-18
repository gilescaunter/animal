import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SuccessScreen = props => {


    return(
        <View style = {styles.screen}>
            <Text>
                Picture of Animal goes here
            </Text>
            <Button title = 'New' />
            <Button title = 'Exit'/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1
    }
});

export default SuccessScreen;

