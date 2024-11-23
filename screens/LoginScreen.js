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

import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.globeIcon}>
        <TouchableOpacity style={styles.globeIconWrapper}>
          <Image
            source={require("../assets/WorldIcon.png")}
            style={{ width: 17, height: 17 }}
          />
          <Image
            source={require("../assets/dropDownIcon.png")}
            style={{ width: 5, height: 5 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.logo}>
        <Image
          width={512}
          height={512}
          source={require("../assets/DHOPTAlogo.png")}
        />
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.loginContent}>
          <View style={styles.title}>
            <Text style={styles.loginText}>Log In</Text>
            <Text style={{ marginTop: 20 }}>
              Please log in as a service seeker.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require("../assets/usernameIcon.png")}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="rgba(0, 0, 0, 0.5)" // Optional for placeholder styling
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              source={require("../assets/passwordIcon.png")}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="rgba(0, 0, 0, 0.5)" // Optional for placeholder styling
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgetPassword")}
          >
            <Text style={{ color: "rgba(0, 0, 0, 0.6)", marginTop: 10 }}>
              Forget Password
            </Text>
          </TouchableOpacity>
          <CustomButton
            onPress={() => {
              navigation.navigate("BottomTab");
            }}
            text="Log In"
          />
          <View style={styles.signupWrapper}>
            <Text style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 15 }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text
                style={{
                  fontWeight: 800,
                  marginLeft: 5,
                  fontSize: 12,
                }}
              >
                Sign Up
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
    backgroundColor: "#FFF",
    flexDirection: "column",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "auto",
    flex: 1,
  },
  globeIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
  },
  globeIconWrapper: {
    flexDirection: "row",
    width: "80%",
    gap: 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
    marginTop: 30,
  },
  loginContainer: {
    // justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  loginContent: {
    width: "80%",
    marginTop: 30,
  },
  loginText: {
    fontSize: 32,
    fontWeight: 700,
    color: "#000",
    fontFamily: "Inter_28pt-SemiBold",
  },
  inputContainer: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Align vertically in the center
    borderColor: "rgba(0, 0, 0, 0.28)",
    borderWidth: 1,
    borderRadius: 9,
    height: 59,
    width: 340,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20, // Adjust icon width
    height: 20, // Adjust icon height
    marginRight: 10, // Add spacing between icon and TextInput
  },
  input: {
    flex: 1,
    height: "100%",
    paddingLeft: 5,
  },
  signupWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default LoginScreen;
