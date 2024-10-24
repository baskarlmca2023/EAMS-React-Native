// app/(admin)/dashboard.js
import React, { useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
// import { useUser } from "../../context/UserContext"; // Corrected path
import { useUser } from "../context/UserContext"; // If context is at the same level as app


const Dashboard = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/(auth)/login");
    }
  }, [user]);

  if (!user || user.role !== "admin") {
    return null; // Prevent rendering if not admin
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Pressable style={styles.button} onPress={() => router.push("/(admin)/manageUsers")}>
        <Text style={styles.buttonText}>Manage Users</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push("/(admin)/reports")}>
        <Text style={styles.buttonText}>Manage Reports</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Dashboard;
