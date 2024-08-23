import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() { 
    return (<View style={styles.inputContainer}>
        <TextInput 
            style= {styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
        />
        <View style={styles.buttonsConatiner}>
            <View style={styles.buttonContiner}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContiner}>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
       
    </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create( {
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#4e0329',
        elevation: 4,
        shadowColor: 'red',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: "center",
    },

    buttonsConatiner: {
        flexDirection: "row",
        backgroundColor: "#4e0399",
        flex: 2

    },

    buttonContiner: {
        flex: 4
    }

});