
import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constannts/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen() {
 return (
    <View style= {styles.rootContainer}> 
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
           <Image  style={styles.image} source={require('../assets/images/success.png')} />
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number{''} <Text style={styles.highlight}>Y</Text></Text>
        <PrimaryButton>Start New Game</PrimaryButton> 
         
    </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center"
},

 imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderRadius: 150,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36
 },

 image: {
    width: "100%",
    height: "100%"
 },

 summaryText: {
  fontFamily: "regular",
  fontSize: 24,
  textAlign: "center",
  marginVertical: 24
 
 },

 highlight: {
  fontFamily: "bold",
  color: Colors.primary500
 }

});