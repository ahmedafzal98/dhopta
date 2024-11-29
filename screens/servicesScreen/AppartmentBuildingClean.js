import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import { Modalize } from "react-native-modalize";
import { SafeAreaView } from "react-native-safe-area-context";

function AppartmentBuildingClean() {
  const [isNavigating, setIsNavigating] = useState(false);

  const { height, width } = Dimensions.get("screen");
  const modalizeRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setBackgroundColor("transparent");
    StatusBar.setBarStyle("light-content");
  }, []);

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleBooknow = () => {
    if (!isNavigating) {
      setIsNavigating(true);
      navigation.navigate("AppartmentBuildingCleanOne");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
        source={require("../../assets/appartmentBuilding.png")}
      >
        <StatusBar translucent backgroundColor="transparent" />

        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Image source={require("../../assets/whiteArrow.png")} />
        </TouchableOpacity>

        <Modalize
          ref={modalizeRef}
          alwaysOpen={height / 2 + StatusBar.currentHeight / 2}
          modalHeight={height - StatusBar.currentHeight}
          panGestureEnabled={true} // Allowing the drag gesture
          dragThreshold={0.3} // Reduced drag threshold to make it more responsive
          snapPoint={height / 2.5}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.title}>Apartment Building Cleaning</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "10%",
                  width: 100,
                }}
              >
                <Image source={require("../../assets/Star.png")} />
                <Text style={{ fontSize: 15, marginLeft: 5 }}>4.5</Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "57%",
              }}
            >
              <Image source={require("../../assets/Map.png")} />
              <Text style={{ fontSize: 8, color: "#A0A0A0" }}>
                2899 S 8500 W, Magna, UT, United States, Utah
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginTop: 10,
                  color: "#13277D",
                  fontWeight: 700,
                  fontSize: 25,
                }}
              >
                50$
                <Text style={{ fontSize: 12, color: "#A0A0A0", marginLeft: 5 }}>
                  {" "}
                  (per Hour)
                </Text>
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#BDBDBD",
                width: "100%",
                height: 1,
                marginTop: 10,
                marginBottom: 10,
              }}
            ></View>
            <Text style={{ fontSize: 15, fontWeight: "700" }}>
              Description:
            </Text>
            <Text style={styles.description}>
              Don’t overlook the importance of maintaining pristine common areas
              in your apartment building. Consistent cleaning services and
              disinfection protection are vital to uphold a clean and reputable
              image. Over time, common areas in apartments and condominiums can
              experience wear and tear due to heavy foot traffic, leading to
              dirty carpeting and deteriorating elevator cabs and lounge spaces.
              To ensure durability and maintenance, it’s imperative to invest in
              a reputable janitorial company. Dhopta LLC specializes in
              apartment building cleaning services and can rejuvenate your
              space, providing a high-quality appearance that enhances your
              building’s reputation.
            </Text>

            <Text style={{ fontSize: 15, fontWeight: "700", marginTop: 15 }}>
              Photo & Video:
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                flexWrap: "wrap",
              }}
            >
              <Image
                source={require("../../assets/service1.png")}
                style={styles.image}
              />
              <Image
                source={require("../../assets/service2.png")}
                style={styles.image}
              />
              <Image
                source={require("../../assets/service3.png")}
                style={styles.image}
              />
              <Image
                source={require("../../assets/service4.png")}
                style={styles.image}
              />
            </View>

            <CustomButton
              text="Book Now"
              onPress={handleBooknow}
              disabled={isNavigating}
            />
          </ScrollView>
        </Modalize>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    height: "100%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backButton: {
    padding: 16,
    marginTop: StatusBar.currentHeight,
  },
  modalStyle: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  apartmentDetails: {
    flex: 1,
    backgroundColor: "red",
    borderRadius: 20,
    margin: 20,
    padding: 20,
    shadowColor: "#000",
    elevation: 15,
    marginBottom: 30,
    marginTop: -50,
  },
  scrollContainer: {
    marginLeft: 30,
    marginRight: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  description: {
    marginTop: 15,
    fontSize: 14,
    lineHeight: 22,
    color: "#747474",
  },
  image: {
    width: 87,
    height: 81,
  },
});

export default AppartmentBuildingClean;
