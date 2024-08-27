
import { StyleSheet, View } from "react-native";
import Colors from '../../constannts/colors';

function card({children}) {
    return <View style={styles.card}>{children}</View>;
}

export default card;

const styles = StyleSheet.create({

    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    }

});