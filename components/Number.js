import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors'

const Number = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.2} 
            onPress={props.onNumberSelect}>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>
                    { props.children }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
{
    numberContainer: {
        margin: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
        padding: 5,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff'
    },
    number: {
        fontSize: 30,
        color: Colors.primary,
    }
})

export default Number;