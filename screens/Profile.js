import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";
const Tab = createMaterialTopTabNavigator();

const Profile = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Your Profile" component={ViewProfile} />
      <Tab.Screen name="Edit Profile" component={EditProfile} />
    </Tab.Navigator>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
