import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Picture = props => {
    return (
        <View style={styles.imageBox}>
            <Image 
                style={styles.image}
                resizeMode='stretch'
                source={props.source}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: '100%'
    },
    imageBox:{
        width: 76,
        height: 76,
        borderRadius: 38,
        // borderWidth: 1,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 5
    }
})

export default Picture