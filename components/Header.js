import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../constants/colors'
import LanguageStrings from '../constants/strings'

export default function Header(props) {
    const strings = LanguageStrings[props.language];
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>{strings.HeaderText}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: Colors.headerText
    }
})
