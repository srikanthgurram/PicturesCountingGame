import React from 'react'
import {Text, StyleSheet} from 'react-native'

const BodyText = props => {
    return (
        <Text style={{...styles.body, ...props.style}}>
            {props.children}
        </Text>
    )
}

const styles=StyleSheet.create({
    body:{
        fontFamily: 'roboto-light',
        fontSize: 20,
        paddingVertical: 5
    }
})

export default BodyText