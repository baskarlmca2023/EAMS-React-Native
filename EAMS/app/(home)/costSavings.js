import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CostSavings = () => {
  return (
    <ScrollView>
      <LinearGradient colors={["#800080", "#D8BFD8"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          <MaterialCommunityIcons name="piggy-bank" size={50} color="black" />
          <Text style={styles.title}>Cost Savings</Text>
          {/* Cost-saving strategies can be detailed here */}
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    color: "black",
  },
});

export default CostSavings;
