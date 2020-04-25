import React from 'react'
import {Button, View, StyleSheet} from 'react-native'
import TitleText from '../components/TitleText'
import LanguageStrings from '../constants/strings'
import BodyText from '../components/BodyText'
import Colors from '../constants/colors'
import Picture from '../components/Picture'

const generateImageList = imageCount => {
    let images = [];
    for (let i=1; i <= imageCount; i++) {
        images.push({
            key: Math.random().toString(36).substring(8), 
            src: require('../assets/images/96px/star.png'),
            id: i.toString()
        })
    }
    console.log(imageCount);
    console.log(images);
    return images;
}

const getRewardsCount=(totalScore) => {
    return (totalScore / 20).toFixed();
}

const SummaryScreen = props => {
    const passCount = props.data.totalPass;
    const failCount = props.data.totalFail;
    const totalCount = props.data.rounds;
    const strings = LanguageStrings[props.language];
    const totalScore = ((passCount/totalCount) * 100);
    const totalRewards = getRewardsCount(totalScore);
    const starImages = generateImageList(totalRewards);
    
    return (
        <View style={styles.screen}>
            <TitleText>{strings.GameOverTitle}</TitleText>
            <View style={styles.rewardsContainer}>
                {
                starImages.map((image) => (
                    <Picture key={image.key} source={image.src}/>
                ))
                }
            </View>
            <View style={styles.summaryContainer}>
                <TitleText>{strings.ResultSummaryTitle}</TitleText>          
                <BodyText>{strings.PassResultTitle}: {passCount}/{totalCount} </BodyText>
                <BodyText>{strings.FailResultTitle}: {failCount}/{totalCount} </BodyText>
                <BodyText>{strings.ScoreTitle}: {totalScore.toFixed()}% </BodyText>
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
        </View>
        
    )
}

const styles=StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50,
    },
    rewardsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    summaryContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 50,
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
    }        
})

export default SummaryScreen
