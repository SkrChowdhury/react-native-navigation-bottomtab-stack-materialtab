import { View, Text } from "react-native";
import React from "react";

const ViewProfile = () => {
  return (
    <View
      style={{
        backgroundColor: "#637",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }}>
        View Profile
      </Text>
    </View>
  );
};

export default ViewProfile;
