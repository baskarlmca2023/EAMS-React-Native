import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Import router

const AllGenerateReports = () => {
  const router = useRouter(); // Initialize router

  return (
    <ScrollView>
      <LinearGradient colors={["#800080", "#D8BFD8"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* Back Button */}
          <Pressable onPress={() => router.push("/(home)/index.js")} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>

          <MaterialCommunityIcons name="file-chart" size={50} color="black" />
          <Text style={styles.title}>All Generate Reports</Text>
          {/* Content for the reports can be added here */}
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
  backButton: {
    position: "absolute",
    top: 50,
    left: 20, // Adjust this for proper placement
    zIndex: 1, // Ensures the back button is on top
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    color: "black",
  },
});

export default AllGenerateReports;
