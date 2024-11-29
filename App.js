import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ForgetPassword from "./screens/ForgetPassword";
import RecoveryPassword from "./screens/RecoveryPassword";
import BottomTab from "./bottomNavigation/BottomTab";
import AppartmentBuildingClean from "./screens/servicesScreen/AppartmentBuildingClean";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppartmentBuildingCleanOne from "./screens/servicesScreen/AppartmentBuildingCleanOne";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RecoveryPassword"
            component={RecoveryPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppartmentBuildingCleanOne"
            component={AppartmentBuildingCleanOne}
            options={{ headerShown: false }}
          />

          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
