import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("screen");

function SliderItem({ item, index }) {
  return (
    <View style={styles.slider}>
      <Image source={item.image}></Image>
    </View>
  );
}

export default SliderItem;

const styles = StyleSheet.create({
  slider: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    marginTop: 5,
  },
});
