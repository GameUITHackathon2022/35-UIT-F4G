import { StyleSheet } from "react-native";
import scale from "../../constants/responsive";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 170,
        width: '100%',
    },
    textContainer: {
        marginTop: 33,
        position: 'absolute',
        left: 330,
    },
    text: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 'bold',
        color:'gray',
        paddingLeft: 24,
    }
})
export default styles;