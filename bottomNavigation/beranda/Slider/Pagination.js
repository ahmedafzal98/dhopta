import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Pagination({ items, paginationIndex, scrollX }) {
  return (
    <View style={styles.container}>
      {items.map((_, index) => {
        return (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: paginationIndex === index ? "#222" : "#aaa" },
            ]}
          />
        );
      })}
    </View>
  );
}

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    backgroundColor: "#aaa",
    height: 8,
    width: 8,
    marginHorizontal: 2,
    borderRadius: 8,
  },
});
