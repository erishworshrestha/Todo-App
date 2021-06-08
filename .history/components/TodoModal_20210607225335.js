import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
function TodoModal({ list, closeModal }) {
  const [name, setName] = useState(list.name);
  const [color, setColor] = useState(list.color);
  const [todo, setTodo] = useState(list.todos);

  const taskcount = todo.length;
  const taskcompleted = todo.filter((todo) => todo.completed).length;
  return (
    <View style={styles.container}>
      {console.log("opened")}
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 0.04 * height,
          right: 0.04 * height,
        }}
        onPress={() => console.log("closed")}
      >
        <AntDesign name="close" size={24} color={colors.black} />
      </TouchableOpacity>

      <View style={[styles.header, { borderBottomColor: color }]}>
        <Text style={styles.title}>{list.name}</Text>
        <Text style={styles.textCount}>
          {taskcompleted} of {taskcount} task
        </Text>
      </View>
    </View>
  );
}

export default TodoModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.black,
  },
});
