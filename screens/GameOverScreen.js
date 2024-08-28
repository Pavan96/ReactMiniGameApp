
import { View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";

function GameOverScreen() {
 return (
    <View> 
        <Title>GAME OVER!</Title>
        <Image source={require('../assets/images/success.png')} />
    </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({


});