import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  Modal,
} from "react-native";
import colors from "./config/colors";
import { AntDesign } from "@expo/vector-icons";
import data from "./components/data";
import TodoList from "./components/TodoList";
import AddListModal from "./components/AddListModal";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [visible, setVisible] = useState(false);
  const [lists, setLists] = useState(data);

  const addList = (list) => {
    setLists([...lists, { ...list, todos: [] }]);
  };

  const updateList = (list) => {
    setLists(
      lists.map((item) => {
        return item.key === list.key ? list : item;
      })
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <AddListModal closeModal={() => setVisible(false)} addList={addList} />
      </Modal>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          Todo{" "}
          <Text style={{ fontWeight: "300", color: colors.blue }}>Lists</Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity
          style={styles.addList}
          onPress={() => setVisible(true)}
        >
          <AntDesign name="plus" size={16} colors={colors.blue} />
        </TouchableOpacity>
        <Text style={styles.add}>Add List</Text>
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={lists}
          keyExtractor={(item) => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          renderItem={({ item }) => (
            <TodoList list={item} updateList={updateList} />
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.lightblue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: colors.black,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightblue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
    alignSelf: "center",
  },
  flatList: {
    height: 0.4 * height,
    paddingLeft: 32,
  },
});
