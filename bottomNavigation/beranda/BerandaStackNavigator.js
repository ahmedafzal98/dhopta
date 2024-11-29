import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Beranda from "./Beranda";
import AppartmentBuildingClean from "../../screens/servicesScreen/AppartmentBuildingClean";
import AppartmentBuildingCleanOne from "../../screens/servicesScreen/AppartmentBuildingCleanOne";

function BerandaStackNavigator() {
  const BerandaStack = createNativeStackNavigator();
  return (
    <BerandaStack.Navigator screenOptions={{ headerShown: false }}>
      <BerandaStack.Screen name="BerandaMain" component={Beranda} />
      <BerandaStack.Screen
        name="AppartmentBuildingClean"
        component={AppartmentBuildingClean}
      />
    </BerandaStack.Navigator>
  );
}

export default BerandaStackNavigator;
