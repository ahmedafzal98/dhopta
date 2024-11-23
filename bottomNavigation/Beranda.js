import {
  Dimensions,
  FlatList,
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
import { carouselData } from "../data/data";
import { useState } from "react";

const Beranda = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{
            height: 200,
            width: screenWidth, // Match screen width
            resizeMode: "cover", // Or "contain", based on your preference
          }}
        />
      </View>
    );
  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "#17367C",
              height: 5,
              width: 5,
              borderRadius: 5,
              marginHorizontal: 3,
            }}
          ></View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "#D9D9D9",
              height: 5,
              width: 5,
              borderRadius: 5,
              marginHorizontal: 3,
            }}
          ></View>
        );
      }
    });
  };
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <View style={styles.searchContainer}>
        <View style={styles.locationWrapper}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 16 }}>Please Select Your Location</Text>
          </TouchableOpacity>
          <Image source={require("../assets/contactIcon.png")} />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/searchIcon.png")}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Find Nearby Services"
            placeholderTextColor="rgba(0, 0, 0, 0.5)" // Optional for placeholder styling
          />
        </View>
      </View>
      <View style={styles.slider}>
        <FlatList
          data={carouselData}
          renderItem={renderItem}
          horizontal
          keyExtractor={(item) => item.id}
          pagingEnabled
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center" // Aligns slides to the center
          snapToInterval={screenWidth} // Ensures snapping matches screen width
          decelerationRate="fast" // Smooth snapping
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {renderDotIndicators()}
        </View>
      </View>
      <View style={styles.serviceContainer}>
        <View>
          <Text style={{ fontSize: 14, margin: 20 }}>Janitorial Services</Text>
        </View>
        <View style={styles.serviceWrapper}>
          <View style={styles.services}></View>

          <View style={styles.services}></View>
          <View style={styles.services}></View>
          <View style={styles.services}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEAED",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "auto",
  },
  searchContainer: {
    // marginTop: 20,
    alignItems: "center",
    height: 150,
    backgroundColor: "#fff",
  },
  locationWrapper: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 50,
  },
  inputContainer: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Align vertically in the center
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 1,
    borderRadius: 5,
    height: 41,
    width: "90%",
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
  slider: {
    borderRadius: 15,
    overflow: "hidden",
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 20,
    height: 230,
  },
  serviceContainer: {
    marginTop: 20,
    flex: "row",
    justifyContent: "space-evenly",
    height: 180,
    backgroundColor: "#fff",
  },
  serviceWrapper: {
    flexDirection: "row",
    height: 100,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  services: {
    width: 76,
    height: 63,
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.19)",
    borderWidth: 1,
  },
});
