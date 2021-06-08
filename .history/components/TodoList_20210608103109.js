import React, { useState } from "react";
import { View, StyleSheet, Text, Modal, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import TodoModal from "./TodoModal";

function TodoList({ list, updateList }) {
  const completed = list.todos.filter((todo) => todo.completed).length;
  const remaining = list.todos.length - completed;

  const [visible, setVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <TodoModal
          closeModal={() => setVisible(false)}
          list={list}
          updateList={updateList}
        />
      </Modal>

      <TouchableOpacity
        style={[styles.container, { backgroundColor: list.color }]}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.title} numberOfLines={1}>
          {list.name}
        </Text>

        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{remaining}</Text>
            <Text style={styles.subtitle}>Remaining</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{completed}</Text>
            <Text style={styles.subtitle}>Completed</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default TodoList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: "center",
    width: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 18,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.white,
  },
});
