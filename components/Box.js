import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Colors from '../constants/colors'

const Box = props => {
    return (
        <View style={{ ...styles.boxContainer, ...props.style }}>
            <View>
                <Text style={styles.boxText}>{ props.content }</Text> 
            </View>                      
        </View>
    )
}

const styles = StyleSheet.create({
    boxText: {
        fontWeight: "100",
        textAlign: 'center',
        fontSize: 60,
        color: 'white'
    },
    boxContainer: {
        width: 100,
        height: 100,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    } 
})

export default Box