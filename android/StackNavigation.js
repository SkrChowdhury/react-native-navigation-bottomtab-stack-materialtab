import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "./Settings";
import Cart from "./Cart";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
