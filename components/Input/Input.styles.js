import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create ({
    container: {
        backgroundColor: '#b0c4de',
        margin:8,
        borderRadius: 20,
        height: 90,
        padding: 15   
    },
    input: {
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: '#778899',
    },
    button_hover: {
        alignItems: 'center',
        margin: 10,
        marginLeft: 95,
        backgroundColor: "#4682b4",
        height: 30,
        justifyContent: 'center',
        width: 80,
        borderRadius: 10
    },
    button: {
        alignItems: 'center',
        margin: 10,
        marginLeft: 95,
        backgroundColor: "#778899",
        height: 30,
        justifyContent: 'center',
        width: 80,
        borderRadius: 10
    },
    text: {
        fontSize: 16,
        color: 'white'
    }
})