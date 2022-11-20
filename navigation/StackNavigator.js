import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import { Button } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Settings from "../screens/Settings";
import AppointmentPage from "../screens/AppointmentPage";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8"
  },
  headerTintColor: "white",
  headerBackTitle: "Back"
};

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerTitle: "Contact"
        }}
      />
    </Stack.Navigator>
  );
};
const SettingsStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: "Settings" }}
      />
      <Stack.Screen name="AppointmentPage" component={AppointmentPage} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator, SettingsStackNavigator };
