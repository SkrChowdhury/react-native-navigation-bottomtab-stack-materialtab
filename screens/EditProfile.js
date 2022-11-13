import { View, Text } from "react-native";
import React from "react";

const EditProfile = () => {
  return (
    <View
      style={{
        backgroundColor: "#345",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }}>
        Edit Profile
      </Text>
    </View>
  );
};

export default EditProfile;
