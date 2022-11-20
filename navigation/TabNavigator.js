import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MainStackNavigator,
  ContactStackNavigator,
  SettingsStackNavigator
} from "./StackNavigator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="home" color={color} size={26} />
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactStackNavigator}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) =>
            <FontAwesome name="user" color={color} size={26} />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{
          tabBarLabel: "Settings",

          tabBarIcon: ({ color }) =>
            <FontAwesome name="gear" color={color} size={26} />
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
