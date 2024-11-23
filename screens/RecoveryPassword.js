import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

function RecoveryPassword() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.loginContent}>
          <View style={styles.title}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgetPassword")}
            >
              <Image source={require("../assets/arrowIcon.png")} />
            </TouchableOpacity>
            <Text style={styles.loginText}>Recovery Password</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.input}
              placeholder="Rest Code"
              keyboardType="numeric"
              placeholderTextColor="rgba(0, 0, 0, 0.5)" // Optional for placeholder styling
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                secureTextEntry={!isPasswordVisible} // Toggle password visibility
              />
              <TouchableOpacity
                style={styles.icon}
                onPress={togglePasswordVisibility}
              >
                <Ionicons
                  name={isPasswordVisible ? "eye-off" : "eye"}
                  size={24}
                  color="rgba(0, 0, 0, 0.5)"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm New Password"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                secureTextEntry={!isPasswordVisible} // Toggle password visibility
              />
              <TouchableOpacity
                style={styles.icon}
                onPress={togglePasswordVisibility}
              >
                <Ionicons
                  name={isPasswordVisible ? "eye-off" : "eye"}
                  size={24}
                  color="rgba(0, 0, 0, 0.5)"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <CustomButton
              onPress={() => navigation.navigate("Login")}
              text="Confirm"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "auto",
    flex: 1,
  },
  title: {
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  loginContent: {
    width: "90%",
    marginTop: 40,
  },
  loginText: {
    fontSize: 32,
    fontWeight: 700,
    color: "#000",
    fontFamily: "Inter_28pt-SemiBold",
  },

  input: {
    height: 59,
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.28)",
    paddingLeft: 10,
    borderRadius: 9,
    marginTop: 5,
  },
  icon: {
    position: "absolute",
    right: 10, // Position the icon to the right inside the TextInput container
    top: "50%", // Center the icon vertically
    transform: [{ translateY: -12 }], // Adjust vertically to center it perfectly
  },
});

export default RecoveryPassword;
