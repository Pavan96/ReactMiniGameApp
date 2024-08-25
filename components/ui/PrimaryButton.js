import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../../constannts/colors';

function PrimaryButton({children, onPressButton}) {
  

    return (
    <View style={styles.buttonOutercontainer}>
        <Pressable 
        style= {({pressed}) => pressed ? [styles.buttonInnercontainer, styles.pressed] : styles.buttonInnercontainer}
        onPress={onPressButton}>
        <Text style={styles.buttonText}>{children}</Text> 
        </Pressable>
    </View>

    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOutercontainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },

    buttonInnercontainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },

    buttonText: {
        color: 'white',
        textAlign: 'center'

    },
    pressed: {
        opacity: 0.75
    }
});