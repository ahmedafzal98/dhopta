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

const ForgetPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.loginContent}>
          <View style={styles.title}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Image source={require("../assets/arrowIcon.png")} />
            </TouchableOpacity>
            <Text style={styles.loginText}>Forget Password</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Email"
              placeholderTextColor="rgba(0, 0, 0, 0.5)" // Optional for placeholder styling
            />
          </View>

          <View>
            <CustomButton
              onPress={() => navigation.navigate("RecoveryPassword")}
              text="Send Email"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "auto",
    flex: 1,
  },
  title: {
    width: "85%",
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
    marginTop: 20,
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
    marginTop: 20,
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
export default ForgetPassword;
