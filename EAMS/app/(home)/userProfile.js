// app/(home)/userProfile.js
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const UserProfile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Pressable style={styles.button} onPress={() => router.push("/(home)/employees")}>
        <Text style={styles.buttonText}>Employee List</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  // Define styles here
});

export default UserProfile;












