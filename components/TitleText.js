import React from 'react'
import {Text, StyleSheet} from 'react-native'

const TitleText = props => {
    return (
        <Text style={{...styles.title, ...props.style}}>
            {props.children}
        </Text>
    )
}

const styles=StyleSheet.create({
    title:{
        fontSize: 20,
        fontFamily: 'roboto-bold',
        textAlign: 'center',
        paddingVertical: 10
    }
})

export default TitleText