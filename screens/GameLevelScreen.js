import React from 'react'
import {View, StyleSheet} from 'react-native'
import LanguageStrings from '../constants/strings'
import BodyText from '../components/BodyText'
import Level from '../components/Level'
import Colors from '../constants/colors'

const GameLevelScreen = props => {
    const strings = LanguageStrings[props.language];

    const levelSelectionHandler = selectedLevel => {
        props.selectLevel(selectedLevel);
    }
    
    return (
        <View style={styles.screen}>
            <BodyText>{strings.LevelSelctionTitle}</BodyText>
            <View style={styles.boxContainer}>
                <Level 
                    key='level1'
                    id={1} 
                    levelName="1"
                    onLevelSelect={levelSelectionHandler}
                ></Level>
                <Level
                    key='level2'
                    id={2}
                    levelName="2"
                    onLevelSelect={levelSelectionHandler}
                ></Level>
                <Level
                    key='level3' 
                    id={3}
                    levelName="3"
                    onLevelSelect={levelSelectionHandler}
                ></Level>
                <Level 
                    key='level4'
                    id={4}
                    levelName="4"
                    onLevelSelect={levelSelectionHandler}
                ></Level>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    boxContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'space-around',
        paddingVertical: 20,
        padding: 5,
        margin: 10
    }   
})

export default GameLevelScreen