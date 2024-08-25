import { StyleSheet, ImageBackground,SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient  } from "expo-linear-gradient";
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() { 
  
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGamerOver] = useState(true);

  function pickedNumberHanlder(pickedNumber) {
    setUserNumber(pickedNumber);
    setGamerOver(false);
  }

  function gameOverHandler() {
    setGamerOver(true);
  }


  let screen = <StartGameScreen onPickNumber={pickedNumberHanlder}/>;

  if (userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen></GameOverScreen>
  }

  
  return (
   <LinearGradient colors={['#4e0329', '#ddb52f']} style= {styles.rootScreen}>
    <ImageBackground 
        source={require('./assets/images/background-image.jpg')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
    > 
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    
    </ImageBackground>
   </LinearGradient>
  );
}

const styles = StyleSheet.create({ 
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
