import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function CommercialClean(props) {
  return (
    <View style={styles.serviceContainer}>
      <View>
        <Text style={{ fontSize: 14, margin: 20 }}>Commercial Cleaning</Text>
      </View>
      <View style={styles.allServices}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.serviceWrapper}>
            <TouchableOpacity style={styles.singleService}>
              <View style={styles.services}>
                <Image source={require("../../assets/cleaning1.png")} />
              </View>
              <Text style={styles.textStyle}>Disinfection Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleService}>
              <View style={styles.services}>
                <Image source={require("../../assets/cleaning2.png")} />
              </View>
              <Text style={styles.textStyle}>GBAC STAR™ Accredited</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleService}>
              <View style={styles.services}>
                <Image source={require("../../assets/cleaning3.png")} />
              </View>
              <Text style={styles.textStyle}>Protection Disinfection</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleService}>
              <View style={styles.services}>
                <Image source={require("../../assets/cleaning4.png")} />
              </View>
              <Text style={styles.textStyle}>Electrostatic Disinfection</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleService}>
              <View style={styles.services}>
                <Image source={require("../../assets/cleaning1.png")} />
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

export default CommercialClean;

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
