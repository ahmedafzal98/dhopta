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

function SignupScreen() {
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
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Image source={require("../assets/arrowIcon.png")} />
            </TouchableOpacity>
            <Text style={styles.loginText}>Sign Up</Text>
          </View>
          <Text style={{ marginTop: 20 }}>
            Please register as a service provide
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Full Name"
              placeholderTextColor="rgba(0, 0, 0, 0.5)" // Optional for placeholder styling
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter an actice email"
              placeholderTextColor="rgba(0, 0, 0, 0.5)" // Optional for placeholder styling
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>New Password</Text>
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
            <Text style={styles.label}>Confirm New Password</Text>
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
          <View>
            <CustomButton text="Sign Up" />
          </View>
          <View style={styles.signupWrapper}>
            <Text style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 15 }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontWeight: 800,
                  marginLeft: 5,
                  fontSize: 12,
                }}
              >
                Log In
              </Text>
            </TouchableOpacity>
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
    width: "45%",
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
  label: {
    color: "#000",
    fontSize: 16,
  },
  inputContainer: {
    position: "relative", // This will allow the icon to be positioned inside the TextInput container
    width: "100%",
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

  signupWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default SignupScreen;
