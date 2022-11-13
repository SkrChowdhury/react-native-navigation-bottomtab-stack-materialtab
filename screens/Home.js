import { View, Text, StyleSheet } from "react-native";
import React from "react";
const Stack = createStackNavigator();
import { NavigationContainer } from "@react-navigation/native";

const Home = () => {
  return; // <View
  //   style={{
  //     backgroundColor: "#637",
  //     flex: 1,
  //     alignItems: "center",
  //     justifyContent: "center"
  //   }}
  // >
  //   <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }}>
  //     Home Screen
  //   </Text>
  // </View>

  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>;
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
