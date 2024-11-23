import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Beranda from "./Beranda";
import Transaski from "./Transaksi";
import Profile from "./Profile";
import Promo from "./Promo";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Platform, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
        component={Beranda}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Entypo name="home" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Transaski"
        component={Transaski}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Entypo name="home" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Promo"
        component={Promo}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Entypo name="home" size={24} color="black" />;
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return <FontAwesome name="user" size={24} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
