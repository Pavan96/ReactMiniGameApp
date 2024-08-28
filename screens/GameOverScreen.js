
import { View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constannts/colors";

function GameOverScreen() {
 return (
    <View> 
        <Title>GAME OVER!</Title>
        <View>
           <Image source={require('../assets/images/success.png')} />
        </View>
    </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
 imageContainer: {
    width: 400,
    height: 400,
    borderWidth: 3,
    borderRadius: 200,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36
 },

 image: {
    width: "100%",
    height: "100%"
 }

});