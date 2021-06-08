import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

function AddListModal(props) {
  return (
    <>
      <StatusBar style="auto" />
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity style={{ position: "absolute", top: 34, right: 32 }}>
          <AntDesign name="close" size={24} color={colors.black} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}

export default AddListModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
