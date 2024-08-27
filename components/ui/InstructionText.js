import { Text, StyleSheet } from "react-native";
import Colors from "../../constannts/colors";

function Instructiontext({children, style}) {
    return <Text style={ [styles.instructionText, style]}>{children}</Text>;
}

export default Instructiontext;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24
     }
});