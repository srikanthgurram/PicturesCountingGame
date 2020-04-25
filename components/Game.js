import React from 'react'
import {View, StyleSheet, Picker, Button, Text} from 'react-native'
import Colors from '../constants/colors'
import LanguageStrings from '../constants/strings'
import TitleText from './TitleText'
import BodyText from './BodyText'
import Picture from './Picture'

const Game = props => {
    const strings = LanguageStrings[props.language];
    return (
        <View style={styles.screen}>
            <TitleText>Level {props.levelInfo.name}: Round {props.round}</TitleText>
            <View style={styles.imagesContainer}>{
                props.data.map((image) => (
                    <Picture key={image.id} source={image.src}/>
                ))
            }</View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    button: {
        margin: 10,
        width: '100%'
    },
    imagesContainer:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    buttonContainer:{
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }   
})

export default Game