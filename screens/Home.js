import { View, Text, Button } from "react-native";
import React from "react";
import Cart from "./Cart";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, alignSelf: "center", marginTop: 20 }}>
        Home Screen
      </Text>
      <View
        style={{
          width: "60%",
          flex: 1,
          justifyContent: "center",
          alignSelf: "center"
        }}
      >
        <View style={{ height: 15 }} />
        <Button
          title="Got to Cart"
          onPress={() => navigation.navigate("Cart")}
        />
        <View style={{ height: 15 }} />
        <Button
          title="Got to Settings"
          onPress={() => navigation.navigate("Settings")}
        />
        <View style={{ height: 15 }} />
        <Button
          title="Got to Profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
};

export default Home;
