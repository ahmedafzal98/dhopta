import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Service(props) {
  return (
    <View style={styles.serviceContainer}>
      <View>
        <Text style={{ fontSize: 14, margin: 20 }}>Janitorial Services</Text>
      </View>
      <View style={styles.allServices}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.serviceWrapper}>
            <TouchableOpacity style={styles.singleService}>
              <View style={styles.services}>
                <Image source={require("../../assets/cleaning.png")} />
              </View>
              <Text style={styles.textStyle}>Apartment Building Cleaning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleService}>
              <View style={styles.services}>
                <Image source={require("../../assets/movingtruck.png")} />
              </View>
              <Text style={styles.textStyle}>Restaurant Cleaning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleService}>
              <View style={styles.services}>
                <Image source={require("../../assets/carservice.png")} />
              </View>
              <Text style={styles.textStyle}>Auto Dealership Cleaning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleService}>
              <View style={styles.services}>
                <Image source={require("../../assets/resturantservice.png")} />
              </View>
              <Text style={styles.textStyle}>
                Educational Facilities Cleaning
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleService}>
              <View style={styles.services}>
                <Image source={require("../../assets/cleaning.png")} />
              </View>
              <Text style={styles.textStyle}>
                Educational Facilities Cleaning
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Service;

const styles = StyleSheet.create({
  serviceContainer: {
    marginTop: 20,

    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 180,
    backgroundColor: "#fff",
  },
  allServices: {
    // flex: 1,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceWrapper: {
    flexDirection: "row",
    height: 90,
    width: "90%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
  },
  singleService: {
    height: 100,
    width: 90,
    alignItems: "center",
    marginLeft: 20,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 10,
  },
  services: {
    width: 76,
    height: 63,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "column",
    borderColor: "rgba(0, 0, 0, 0.19)",
    borderWidth: 1,
  },
});
