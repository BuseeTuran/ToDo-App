import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./Input.styles";

const Input = ({setTodo, handleInput, text}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ne yapacaksın ?"
                value= {text}
                onChangeText={(text) => setTodo(text)}
               
            />
            <Pressable style={text.length>0 ? styles.button_hover : styles.button} onPress={handleInput}>
                <Text style={styles.text}>Kaydet</Text>
            </Pressable>

        </View>
    )
}

export default Input;