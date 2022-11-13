import { View, Text } from "react-native";
import React from "react";

const Settings = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#255"
      }}
    >
      <Text style={{ fontSize: 20, color: "white" }}>Settings</Text>
    </View>
  );
};

export default Settings;
