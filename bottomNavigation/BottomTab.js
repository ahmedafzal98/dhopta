import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Transaski from "./Transaksi";
import Profile from "./Profile";
import Promo from "./Promo";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, Platform, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Beranda from "./beranda/Beranda";
import { useEffect } from "react";
import BerandaStackNavigator from "./beranda/BerandaStackNavigator";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,

    height: 60,
    backgroundColor: "#FFF",
  },
};

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={BerandaStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/home.png")
                    : require("../assets/home.png")
                }
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "#1E90FF" : "#A9A9A9",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Transaski"
        component={Transaski}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/booking.png") // Image for active tab
                    : require("../assets/booking.png")
                }
                style={{ width: 24, height: 24 }} // Adjust the size as needed
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Promo"
        component={Promo}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/creditcard.png") // Image for active tab
                    : require("../assets/creditcard.png")
                }
                style={{ width: 24, height: 24 }} // Adjust the size as needed
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/user.png") // Image for active tab
                    : require("../assets/user.png")
                }
                style={{ width: 24, height: 24 }} // Adjust the size as needed
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
