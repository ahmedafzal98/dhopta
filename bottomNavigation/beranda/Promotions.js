import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("screen");
function Promotions(props) {
  return (
    <View style={styles.promotions}>
      <View>
        <Text style={{ fontSize: 14, margin: 20 }}>Service Promotions</Text>
      </View>

      <View style={styles.promotionContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.promotionsWrapper}>
            <View style={styles.singlePromotion}>
              <Image
                style={{ width: "100%" }}
                source={require("../../assets/promotion2.png")}
              />
              <View style={styles.promotionDetail}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <View style={styles.package}>
                    <Text style={{ fontSize: 6, textAlign: "center" }}>
                      Standard Package
                    </Text>
                  </View>
                  <View style={styles.package}>
                    <Text style={{ fontSize: 6, textAlign: "center" }}>
                      2 People
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    marginTop: 5,
                    width: "100%",
                    fontWeight: 700,
                  }}
                >
                  Home | Deep Cleaning
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    color: "rgba(0,0,0,0.55)",
                    marginTop: 5,
                    width: "100%",
                  }}
                >
                  Meliputih mengelap debu, mengepel lantai, merapikan kamar
                  tidur dan membersihkan kamar mandi
                </Text>
                <View style={styles.promoCode}>
                  <Image source={require("../../assets/promocode.png")} />
                  <Text
                    style={{ fontSize: 6, color: "#1D6F66", marginLeft: 5 }}
                  >
                    Promo
                  </Text>
                </View>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 10,
                    color: "rgba(0,0,0,0.6)",
                  }}
                >
                  $200.000 /{" "}
                  <Text style={{ color: "rgba(0,0,0,0.73)" }}> 60 min</Text>
                </Text>
              </View>
            </View>
            <View style={styles.singlePromotion}>
              <Image source={require("../../assets/promotion1.png")} />
              <View style={styles.promotionDetail}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <View style={styles.package}>
                    <Text style={{ fontSize: 6, textAlign: "center" }}>
                      General Package
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    marginTop: 5,
                    width: "100%",
                    fontWeight: 700,
                  }}
                >
                  CleanHome HydroClean
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    color: "rgba(0,0,0,0.55)",
                    marginTop: 5,
                    width: "100%",
                  }}
                >
                  Jasa vacuum tungau dan debu profesional untuk soft furniture.
                  menggunakan teknologi HydroAllergenic System
                </Text>
                <View style={styles.promoCode}>
                  <Image source={require("../../assets/promocode.png")} />
                  <Text
                    style={{ fontSize: 6, color: "#1D6F66", marginLeft: 5 }}
                  >
                    Promo
                  </Text>
                </View>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 10,
                    color: "rgba(0,0,0,0.6)",
                  }}
                >
                  $200.000 /{" "}
                  <Text style={{ color: "rgba(0,0,0,0.73)" }}> 60 min</Text>
                </Text>
              </View>
            </View>
            <View style={styles.singlePromotion}>
              <Image source={require("../../assets/promotion1.png")} />
              <View style={styles.promotionDetail}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <View style={styles.package}>
                    <Text style={{ fontSize: 6, textAlign: "center" }}>
                      General Package
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    marginTop: 5,
                    width: "100%",
                    fontWeight: 700,
                  }}
                >
                  CleanHome HydroClean
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    color: "rgba(0,0,0,0.55)",
                    marginTop: 5,
                    // width: "100%",
                  }}
                >
                  Jasa vacuum tungau dan debu profesional untuk soft furniture.
                  menggunakan teknologi HydroAllergenic System
                </Text>
                <View style={styles.promoCode}>
                  <Image source={require("../../assets/promocode.png")} />
                  <Text
                    style={{ fontSize: 6, color: "#1D6F66", marginLeft: 5 }}
                  >
                    Promo
                  </Text>
                </View>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 10,
                    color: "rgba(0,0,0,0.6)",
                  }}
                >
                  $200.000 /{" "}
                  <Text style={{ color: "rgba(0,0,0,0.73)" }}> 60 min</Text>
                </Text>
              </View>
            </View>
            <View style={styles.singlePromotion}>
              <Image
                source={require("../../assets/promotion1.png")}
                style={{ resizeMode: "stretch" }}
              />
              <View style={styles.promotionDetail}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <View style={styles.package}>
                    <Text style={{ fontSize: 6, textAlign: "center" }}>
                      General Package
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    marginTop: 5,
                    width: "100%",
                    fontWeight: 700,
                  }}
                >
                  CleanHome HydroClean
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    color: "rgba(0,0,0,0.55)",
                    marginTop: 5,
                    width: "100%",
                  }}
                >
                  Jasa vacuum tungau dan debu profesional untuk soft furniture.
                  menggunakan teknologi HydroAllergenic System
                </Text>
                <View style={styles.promoCode}>
                  <Image source={require("../../assets/promocode.png")} />
                  <Text
                    style={{ fontSize: 6, color: "#1D6F66", marginLeft: 5 }}
                  >
                    Promo
                  </Text>
                </View>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 10,
                    color: "rgba(0,0,0,0.6)",
                  }}
                >
                  $200.000 /{" "}
                  <Text style={{ color: "rgba(0,0,0,0.73)" }}> 60 min</Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Promotions;

const styles = StyleSheet.create({
  promotions: {
    marginTop: 20,
    // height: 200,
    marginBottom: "20%",
  },
  promotionContainer: {
    paddingVertical: 10,
  },
  promotionsWrapper: {
    flexDirection: "row", // Ensures horizontal alignment
    paddingHorizontal: 10,
  },
  singlePromotion: {
    borderRadius: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
    width: width / 2,
    elevation: 5,
    marginRight: 10, // Adds spacing between boxes
    paddingBottom: 10, // Adds space for content inside the box
  },
  promotionDetail: {
    marginHorizontal: 10, // Adds padding inside the content
  },
  package: {
    marginTop: 5,
    padding: 3,
    borderRadius: 3,
    borderColor: "rgba(1, 151, 178, 0.32)",
    borderWidth: 1,
  },
  promoCode: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center", // Ensures icon and text align properly
  },
  image: {
    width: "100%", // Makes the image span the box width
    height: 120, // Adjust as per requirement
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: "cover", // Ensures consistent scaling
  },
});
