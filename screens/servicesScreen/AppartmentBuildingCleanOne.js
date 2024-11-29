import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function AppartmentBuildingCleanOne() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContent}>
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/arrowIcon.png")} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Apartment Building Cleaning</Text>
        </View>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.questionText}>
          How many hours do you need your professional to stay?
        </Text>
        <View style={styles.hoursContainer}>
          {["2", "3", "4", "5", "6", "7", "8", "9"].map((item) => (
            <TouchableOpacity key={item} style={styles.roundCircle}>
              <Text style={styles.circleText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.questionText}>
          How many professionals do you need?
        </Text>
        <View style={styles.professionalsContainer}>
          {["2", "3", "4", "5", "6"].map((item) => (
            <TouchableOpacity key={item} style={styles.roundCircle}>
              <Text style={styles.circleText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.questionText}>
          Do you already have the equipment?
        </Text>
        <View style={styles.equipmentContainer}>
          <TouchableOpacity style={styles.equipmentButtonPrimary}>
            <Text style={styles.primaryButtonText}>No, I have them</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.equipmentButtonSecondary}>
            <Text style={styles.secondaryButtonText}>Yes, I need them</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sticky Bottom Tab */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.bottomTabButton}>
          <Text style={styles.bottomTabText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTabButton}>
          <Text style={styles.bottomTabText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default AppartmentBuildingCleanOne;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
  },
  wrapper: {
    marginLeft: 20,
    marginTop: 50,
  },
  questionText: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
  },
  hoursContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginRight: 20,
    marginTop: 20,
    justifyContent: "space-between",
  },
  professionalsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "70%",
    justifyContent: "space-between",
    marginTop: 20,
  },
  equipmentContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    marginTop: 20,
  },
  roundCircle: {
    width: 31,
    height: 31,
    borderRadius: 15.5,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginBottom: 10, // Space between rows
  },
  circleText: {
    color: "#979797",
    fontSize: 15,
    textAlign: "center",
  },
  equipmentButtonPrimary: {
    width: "45%",
    height: 40,
    backgroundColor: "#13277D",
    borderRadius: 30,
    justifyContent: "center",
  },
  equipmentButtonSecondary: {
    width: "45%",
    height: 40,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    backgroundColor: "transparent",
    borderRadius: 30,
    justifyContent: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 10,
    textAlign: "center",
  },
  secondaryButtonText: {
    color: "#979797",
    fontSize: 10,
    textAlign: "center",
  },
  loginContent: {
    width: "100%",
    justifyContent: "space-between",
    marginTop: 30,
  },
  bottomTab: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderColor: "#D9D9D9",
  },
  bottomTabButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#13277D",
    borderRadius: 10,
  },
  bottomTabText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
