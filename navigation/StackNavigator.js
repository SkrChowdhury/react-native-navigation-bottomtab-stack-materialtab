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

const Stack = createStackNavigator();
const navigation = useNavigation();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8"
  },
  headerTintColor: "white",
  headerBackTitle: "Back"
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerTitle: "Contact",
          headerLeft: () =>
            <FontAwesome
              onPress={() => navigation.navigate("Home")}
              name="chevron-left"
              size={20}
              color="white"
              style={{ padding: 5 }}
            />
        }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator };
