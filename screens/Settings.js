import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <Text style={{ fontSize: 18, marginBottom: 15 }}>
        This is the Settings screen
      </Text>
      <Button
        title="Go to Appointment Screen"
        onPress={() => navigation.navigate("AppointmentPage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
});

export default Settings;
