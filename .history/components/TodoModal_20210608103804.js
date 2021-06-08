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
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

const { width, height } = Dimensions.get("screen");

function TodoModal({ list, closeModal, updateList }) {
  const [name, setName] = useState(list.name);
  const [color, setColor] = useState(list.color);
  const [todos, setTodo] = useState(list.todos);

  const taskcount = todos.length;
  const taskcompleted = todos.filter((todo) => todo.completed).length;

  const toggleTodoCompleted = (index) => {
    todos[index].completed = !todos[index].completed;
    updateList(list);
  };

  const renderTodo = (todo, index) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={() => toggleTodoCompleted(index)}>
          <Ionicons
            name={todo.completed ? "ios-square" : "ios-square-outline"}
            size={24}
            color={colors.gray}
            style={{ width: 32 }}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.todo,
            { textDecorationLine: todo.completed ? "line-through" : "none" },
            { color: todo.completed ? colors.gray : colors.black },
          ]}
        >
          {todo.title}
        </Text>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
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
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.textCount}>
            {taskcompleted} of {taskcount} task
          </Text>
        </View>
        <View style={[styles.section, { flex: 4 }]}>
          <FlatList
            data={todos}
            // keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => renderTodo(item, index)}
            contentContainerStyle={{
              paddingHorizontal: 32,
              paddingVertical: 32,
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={[styles.section, styles.footer]}>
          <TextInput
            style={[styles.input, { borderColor: color }]}
            placeholder="Enter Task....."
          />
          <TouchableOpacity
            style={[styles.addTodo, { backgroundColor: color }]}
          >
            <AntDesign name="plus" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default TodoModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    // alignSelf: "stretch",
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 0.15 * width,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.black,
  },
  textCount: {
    marginTop: 4,
    marginBottom: 16,
    color: colors.gray,
    fontWeight: "600",
  },
  section: {},
  footer: {
    flexDirection: "row",
    paddingHorizontal: 32,
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    fontSize: 20,
    fontWeight: "700",
  },
});
