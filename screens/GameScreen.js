import { Text, View, StyleSheet} from "react-native";

function GameScreen() {
    return <View style={styles.screen}>
      <Text> Oppenents Guest</Text> 
       {/* Guess */}
      <View>
      <Text>Higher or lower?</Text>
      {/*+ - */}
      </View>
      {/*<View>LOG ROUND</View> */}
    </View>
}

export default GameScreen;

const styles = StyleSheet.create ({
 
screen: {
    flex: 1,
    padding: 12

}
});