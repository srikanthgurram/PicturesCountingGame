import React from 'react'
import Box from './Box'
import { StyleSheet, TouchableOpacity } from 'react-native'

const Level = props => {
    return (
        <TouchableOpacity 
            activeOpacity={0.8} 
            onPress={props.onLevelSelect.bind(this, props.levelName)}
        >
            <Box style={{ ...styles.level, ...props.style }} content={props.levelName}></Box>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    level:{
        padding: 5,
        margin: 10
    },
});

export default Level