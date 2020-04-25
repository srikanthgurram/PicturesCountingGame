/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
'use strict';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LanguageScreen from './screens/LanguageScreen'
import Header from './components/Header';
import IntroScreen from './screens/IntroScreen';
import GameLevelScreen from './screens/GameLevelScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors'
import SummaryScreen from './screens/SummaryScreen'

const App: () => React$Node = () => {
  const [language, setLanguage] = useState("EN");
  const [languageSelected, setLanguageSelected] = useState(false);
  const [levelSelected, setLevelSelected] = useState(false);
  const [level, setLevel] = useState(0);
  const [getStarted, setGetStarted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [scores, setScores] = useState([])
  const [gameScore, setGameScore] = useState([])

  const languageHandler = selectedLanguage => {
    setLanguage(selectedLanguage);
    setLanguageSelected(true);
  }
  
  const levelSelectionHandler = (selectedLevel) => {
    setLevel(selectedLevel);
    setLevelSelected(true);
    setShowSummary(false);
  }

  const getStartedHandler = () => {
    setGetStarted(true)
  }

  const resetGameHandler = () => {
    setLevelSelected(false);
    setLevel(0);
    setShowSummary(false);
  }

  const updateScoreBoard = currentScore => {
    setScores(scores => {
        return [...scores, 
          {key: Math.random().toString(36).substring(8), score: gameScore}
        ]
    });
  }

  const showSummaryHandler = currentScore => {
    setGameScore(currentScore);
    updateScoreBoard(currentScore);
    setShowSummary(true);
    setLevel(0);
    setLevelSelected(false);
  }

  let content = <LanguageScreen selectLanguage={languageHandler}/>

  if(languageSelected && !levelSelected && !getStarted && !showSummary){
    content = <IntroScreen 
                language={language}
                onGetStarted={getStartedHandler}
              ></IntroScreen>
  }else if (languageSelected && !levelSelected && getStarted && !showSummary){
    content = <GameLevelScreen 
                language={language}
                selectLevel={levelSelectionHandler}
              ></GameLevelScreen>
  }else if (levelSelected && !showSummary){
    content=<GameScreen 
              language={language}
              level={level}
              onResetGame={resetGameHandler}
              onTestComplete={showSummaryHandler}
            ></GameScreen>
  }else if (showSummary){
    content=<SummaryScreen 
              language={language}
              onResetGame={resetGameHandler}
              data={gameScore}
            ></SummaryScreen>
  }

  return (
    <View style={styles.container}>
      <Header language={language}></Header>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'roboto-light',
    backgroundColor: Colors.screenBackground
  },  
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
