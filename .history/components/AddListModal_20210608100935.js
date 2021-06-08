import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import data from "./data";
const { width, height } = Dimensions.get("screen");

function AddListModal({ closeModal }) {
  const backgroundColors = [
    "#5CD859",
    "#24A6D9",
    "#595BD9",
    "#8022D9",
    "#D159D8",
    "#D85963",
    "#D88559",
  ];

  const [name, setName] = useState("");

  const [color_, setColor_] = useState(backgroundColors[0]);

  const renderColor = () => {
    return backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, { backgroundColor: color }]}
          onPress={() => setColor_(color)}
        />
      );
    });
  };

  const createTodo = () => {
    const color = color_;
    data.push({
      id: data.length + 1,
      name: name,
      color: color,
      todos: [],
    });
    setName("");
    closeModal();
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
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

      <View style={{ alignSelf: "stretch", marginhorizontal: 32, margin: 20 }}>
        <Text style={styles.title}>Create Todo List</Text>
        <TextInput
          style={styles.input}
          placeholder="List Name"
          onChangeText={(text) => setName(text)}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          {renderColor()}
        </View>
        <TouchableOpacity
          style={[styles.create, { backgroundColor: color_ }]}
          onPress={createTodo}
        >
          <Text
            style={{ color: colors.white, fontWeight: "800", fontSize: 22 }}
          >
            Create!
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default AddListModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
    margin: 5,
  },
});
