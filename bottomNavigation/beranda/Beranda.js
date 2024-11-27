import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import Service from "../beranda/Service";
import CommercialClean from "../beranda/CommercialClean";
import Promotions from "../beranda/Promotions";
import Slider from "./Slider/Slider";
import { carouselData } from "../../data/data";
const Beranda = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  // const Slider = ({ data }) => {
  //   return (
  //     <Carousel
  //       data={data}
  //       renderItem={renderItem}
  //       sliderWidth={screenWidth}
  //       itemWidth={screenWidth - 60}
  //       layout="default"
  //       onSnapToItem={(index) => setActiveIndex(index)}
  //     />
  //   );
  // };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#fff" barStyle="light-content" />
        <View style={styles.searchContainer}>
          <View style={styles.locationWrapper}>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16 }}>Please Select Your Location</Text>
            </TouchableOpacity>
            <Image source={require("../../assets/contactIcon.png")} />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require("../../assets/searchIcon.png")}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Find Nearby Services"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
            />
          </View>
        </View>
        <View style={styles.slider}>
          <Slider itemList={carouselData} />
          {/* <Slider
          data={carouselData}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          renderItem={renderItem}
        /> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          ></View>
        </View>

        <Service />
        <CommercialClean />
        <Promotions />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEAED",
  },
  searchContainer: {
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
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 1,
    borderRadius: 20,
    height: 41,
    width: "90%",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingLeft: 5,
  },
  slider: {
    overflow: "hidden",
    // padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 230,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  card: {
    borderRadius: 10,
    overflow: "hidden",
  },
});
