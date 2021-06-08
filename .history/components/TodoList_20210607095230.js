import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function TodoList({ list }) {
  const completed = list.todos.filter((todo) => todo.completed).length;
  return (
    <View style={[styles.container, { backgroundColor: list.color }]}>
      <Text style={styles.title} numberOfLines={1}>
        {list.name}
      </Text>

      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{completed}</Text>
          <Text style={styles.subtitle}>Remaining</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>0</Text>
          <Text style={styles.subtitle}>Completed</Text>
        </View>
      </View>
    </View>
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
