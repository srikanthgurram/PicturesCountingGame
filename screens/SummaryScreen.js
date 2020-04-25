import React from 'react'
import {Button, View, StyleSheet} from 'react-native'
import TitleText from '../components/TitleText'
import LanguageStrings from '../constants/strings'
import BodyText from '../components/BodyText'
import Colors from '../constants/colors'

const SummaryScreen = props => {
    const strings = LanguageStrings[props.language];
    const totalScore = ((props.data.totalPass/props.data.rounds) * 100);

    return (
        <View style={styles.screen}>
            <TitleText>{strings.ResultSummaryTitle}</TitleText>
            <BodyText>{strings.LevelTitleText}: {props.data.level} </BodyText>
            <BodyText>{strings.TotalRoundsTitle}: {props.data.rounds}</BodyText>
            <BodyText>{strings.PassResultTitle}: {props.data.totalPass} </BodyText>
            <BodyText>{strings.FailResultTitle}: {props.data.totalFail} </BodyText>
            <BodyText>{strings.SoreTitle}: {totalScore.toFixed()}% </BodyText>
            <BodyText></BodyText>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button 
                        color={Colors.secondary}
                        onPress={props.onResetGame}
                        title={strings.StartNewGameButtonText}
                    />
                </View>
            </View>
        </View>
        
    )
}

const styles=StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingHorizontal: 50,
    },
    body:{
        fontFamily: 'roboto-light',
        fontSize: 20
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    },
    button: {
        margin: 10,
        width: '100%'
    },        
})

export default SummaryScreen
