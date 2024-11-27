import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width } = Dimensions.get("screen");

function SliderItem({ item, index, scrollX }) {
  const reAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.slider, reAnimatedStyle]}>
      <Image source={item.image}></Image>
    </Animated.View>
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
