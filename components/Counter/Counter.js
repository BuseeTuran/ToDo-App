import React from "react";
import styles from "./Counter.styles";
import { View, Text } from "react-native";


const Counter = ( {list} ) => {

    const listCount = list.filter((item) => !item.isDone)

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Yapılacaklar :</Text>
            <Text style={styles.counter}>{listCount.length}</Text>
        </View>
    )
}

export default Counter;