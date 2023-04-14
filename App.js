import React, {useState} from "react";
import { SafeAreaView, View, StyleSheet,  Alert} from "react-native";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Input from "./components/Input";




function App () {

  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");

  const handleInput = () => {
    if (todo.length>0){
      const newTodo = {
        id: (Math.random().toFixed(4)),
        text: todo,
        isDone: false
      }
      setList([newTodo, ...list])
      setTodo("")
    }else{
      Alert.alert("Boş ekleme yapamazsınız..")
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Counter  list={list} />
        <TodoList  todoList={list} setList={setList}/>
        <Input setTodo={setTodo}  handleInput={handleInput}  text={todo} />
      </View>
    
    </SafeAreaView>
  )
}

export default App;

const styles=StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#778899',
    padding: 10,
  },

})
