import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = props => {
    if(!props.children){
        return null;
    }

    return (
        <View style={{ ...styles.card, ...props.style }}>
            { props.children }
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        marginTop: 10,
        marginHorizontal: 5,
        maxWidth: '100%',
        alignItems: 'center',
        elevation: 8,
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowOpacity: 0.26,
        padding: 5,
        borderRadius: 10,
        shadowOffset: {width: 0, height: 2}
    },
})

export default Card