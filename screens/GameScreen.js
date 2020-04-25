import React, {useState, useEffect, useRef} from 'react'
import {View, StyleSheet, Button, Text, ScrollView} from 'react-native'
import Colors from '../constants/colors'
import LanguageStrings from '../constants/strings'
import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'
import Picture from '../components/Picture'
import NumberList from '../components/NumberList'
import Card from '../components/Card'
import Data from '../constants/data'

const generateRandomBetween = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randNumber = Math.floor(Math.random() * (max-min)) + min;
    return randNumber
}

const getRandomImageCount = () => {
    return generateRandomBetween(1, 11);
}

const getRandomImage = () => {
    const imageList = Data.images;
    const randNumber = generateRandomBetween(0, imageList.length);
    return imageList[randNumber];
}

const generateRandomImageList = imageCount => {
    const randImage = getRandomImage();
    let images = [];
    for (let i=0; i < imageCount; i++) {
        images.push({
            key: Math.random().toString(36).substring(8), 
            src: randImage.src,
            id: randImage.id,
            name: randImage.name
        })
    }
    return images;
}

const GameScreen = props => {
    const levelInfo = Data.levels;
    const levelSelected = props.level;
    const totalRounds = levelInfo[levelSelected].rounds;
    const levelName = levelInfo[levelSelected].name
    const strings = LanguageStrings[props.language];
    const [userChoice, setUserChoice] = useState(0);
    const [round, setRound] = useState(1);
    const [result, setResult] = useState(false);
    const [expectedCount, setExpectedCount] = useState(getRandomImageCount());
    const [randomImageList, setRandomImageList] = useState(generateRandomImageList(expectedCount));
    const [isNumberSelected, setIsNumberSelected] = useState(false);
    const defaultResultContent = <Text>{strings.ResultHelpText}</Text>
    const [resultContent, setResultContent]=useState(defaultResultContent)
    const totalPass = useRef(0);
    const totalFail = useRef(0);    

    const updateScores = () => {
        if(result){
            totalPass.current = totalPass.current + 1;
        }else{
            totalFail.current = totalFail.current + 1;
        }
    }

    const resetCurrentRound = () => {
        setUserChoice(0);
        setIsNumberSelected(false);
        setResult(false);
    }

    const nextButtonHandler = () => {
        updateScores();
        setRound(currentRound => currentRound + 1);
        refreshImages();
        if(round == totalRounds){
            props.onTestComplete({
                'level': props.level,
                'rounds':totalRounds,
                'totalPass': totalPass.current,
                'totalFail': totalFail.current,
            })
        }
        resetCurrentRound();
    }

    const refreshImages = () => {
        const imageCount = getRandomImageCount();
        setExpectedCount(imageCount);
        const randomImages = generateRandomImageList(imageCount);
        setRandomImageList(randomImages);
    }

    const validateInput = userInput => {
        setIsNumberSelected(true);
        setUserChoice(userInput);
        if(userInput === expectedCount && userInput > 0){
            setResult(true);
        }else if (userInput !== expectedCount && userInput > 0){
            setResult(false);
        }
    }

    useEffect(() => {
        // Update the document title using the browser API
        if(isNumberSelected){
            if(result){
                setResultContent(<Text style={styles.passText}>{strings.ResultPassText}</Text>)
            }else{
                setResultContent(<Text style={styles.failText}>{strings.ResultFailText}</Text>)
            }
        }else{
            setResultContent(defaultResultContent)
        }

    }, [isNumberSelected, result, userChoice]);

    return (
        <ScrollView>
        <View style={styles.screen}>
    <TitleText>{strings.LevelTitleText}: {levelName}       {strings.RoundTitleText}: {round}/{totalRounds}</TitleText>
            <Card>
                <View style={styles.imagesContainer}>
                    {
                    randomImageList.map((image) => (
                        <Picture key={image.key} source={image.src}/>
                    ))
                    }
                </View>
            </Card>
            <BodyText style={styles.bodyText}>{strings.SelectCountHelpText}</BodyText>
                <View style={styles.numbersContainer}>
                    <NumberList 
                        validateInput={validateInput}
                    ></NumberList>
                </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button 
                        color={Colors.primary}
                        onPress={nextButtonHandler}
                        title={strings.NextRoundButtonText}
                    />
                </View>
            </View>
            <View style={styles.resultContainer}>
                {resultContent}
            </View>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imagesContainer:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    bodyText: {
        marginTop: 10
    },
    numbersContainer:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    passText: {
        fontSize: 40,
        color: Colors.primary,
        fontFamily: 'roboto-bold-italic'
    },
    failText: {
        fontSize: 40,
        color: Colors.errorText,
        fontFamily: 'roboto-bold-italic'
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
    resultContainer:{
        paddingTop: 5
    }
})

export default GameScreen