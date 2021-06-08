import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  FlatList,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
function TodoModal({ list, closeModal }) {
  const [name, setName] = useState(list.name);
  const [color, setColor] = useState(list.color);
  const [todos, setTodo] = useState(list.todos);

  const taskcount = todos.length;
  const taskcompleted = todos.filter((todo) => todo.completed).length;

  const renderTodo = (todo) => {
    return (
      <View>
        <Text>{todo.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 0.04 * height,
          right: 0.04 * height,
        }}
        onPress={closeModal}
      >
        <AntDesign name="close" size={24} color={colors.black} />
      </TouchableOpacity>

      <View style={[styles.header, { borderBottomColor: color }]}>
        <Text style={styles.title}>{list.name}</Text>
        <Text style={styles.textCount}>
          {taskcompleted} of {taskcount} task
        </Text>
      </View>
      <View style={styles.section}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => renderTodo(item)}
          contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput style={[styles.input, { borderColor: color }]} />
        <TouchableOpacity style={[styles.addTodo, { backgroundColor: color }]}>
          <AntDesign name="plus" size={24} color={colors.black} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    marginLeft: 0.15 * width,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.black,
  },
  textCount: {
    marginTop: 4,
    marginBottom: 16,
    color: colors.gray,
    fontWeight: "600",
  },
  section: {
    flex: 4,
  },
});
