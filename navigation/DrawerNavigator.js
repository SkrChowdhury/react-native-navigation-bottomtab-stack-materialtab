import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  ContactStackNavigator,
  SettingsStackNavigator
} from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import AppointmentPage from "../screens/AppointmentPage";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
