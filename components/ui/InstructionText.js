import { Text, StyleSheet } from "react-native";
import Colors from "../../constannts/colors";

function Instructiontext({children}) {
    return <Text style={style.instructionText}>{children}</Text>;
}

export default Instructiontext;

const style = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24
     }
});