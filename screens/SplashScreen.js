import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";

function SplashScreen() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Fade to full opacity
      duration: 4000, // Duration of the animation (2 seconds)
      useNativeDriver: true,
    }).start();
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../assets/splashBackground.png")}
      >
        <ActivityIndicator style={{ top: 130 }} size="large" color="#00ff00" />
      </ImageBackground>
    );
  }

  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});

export default SplashScreen;
