import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View
      style={{
        backgroundColor: "#022",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }}>
        Home Screen
      </Text>
    </View>
  );
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
