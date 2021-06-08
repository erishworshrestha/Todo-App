import React from "react";
import { View, StyleSheet, Text } from "react-native";

function TodoList({ list }) {
  return;
  <View style={[styles.container, { backgroundColor: list.color }]}>
    <Text style={styles.title} numberOfLines={1}>
      {list.name}
    </Text>
  </View>;
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
});
