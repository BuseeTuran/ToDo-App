import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    container: {
        minHeight: '70%'
    },
    todoItem_true: {
        color: "blue"
    },
    todo_content: {
        margin: 10,
        padding: 15,
        backgroundColor: "#b0c4de",
        borderRadius: 15,
    },
    todo_true: {
        backgroundColor: 'white',
        margin: 10,
        padding: 15,
        borderRadius: 15,
        color: '#5f9ea0',
        fontSize: 18,
        textDecorationLine: "line-through"
    },
    todoItem: {
        color: '#808080',
        fontSize: 18,
    }

})