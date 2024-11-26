import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import LoginScreen from "./LoginScreen";

function SplashScreen() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const slideAnim = useRef(new Animated.Value(0)).current; // Initial position
  const opacityAnim = useRef(new Animated.Value(1)).current; // Initial opacity

  useEffect(() => {
    // Start the fade-in animation immediately
    Animated.timing(opacityAnim, {
      toValue: 1, // Full opacity
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Set a timer to start the slide-out animation
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -500, // Move to the left (-500 is arbitrary, adjust as per your design)
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0, // Fade out
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIsSplashVisible(false); // Remove splash after animation completes
      });
    }, 3000); // Wait for 3 seconds before animating out

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateX: slideAnim }], // Slide out animation
            opacity: opacityAnim, // Fade out animation
          },
        ]}
      >
        <ImageBackground
          style={styles.imageBackground}
          source={require("../assets/splashBackground.png")}
        >
          <ActivityIndicator
            style={{ top: 130 }}
            size="large"
            color="#00ff00"
          />
        </ImageBackground>
      </Animated.View>
    );
  }

  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
