import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import Card from '../components/Card'
import LanguageStrings from '../constants/strings'
import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'
import Colors from '../constants/colors'

const IntroScreen = props => {
    const strings = LanguageStrings[props.language];

    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <TitleText style={styles.introTitle}>{strings.IntroductionTitle}</TitleText>
                <BodyText>{strings.IntroductionText}</BodyText>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title={strings.GetStartedButtonText} 
                            color={Colors.primary}
                            onPress={props.onGetStarted}
                        />
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    introTitle: {
        textAlign: 'left',
        paddingVertical: 10 
    },
    buttonContainer:{
        marginVertical: 10,
        width: '80%',
        justifyContent: 'space-evenly'
    },
    button: {
        width: '50%'
    },
    card: {
        padding: 10
    }
});

export default IntroScreen
