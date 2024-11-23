import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function CustomButton({ onPress, text }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: 800 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 46,
    width: "100%",
    backgroundColor: "#13277D",
    borderRadius: 30,
  },
});

export default CustomButton;
