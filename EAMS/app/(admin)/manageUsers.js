// app/(admin)/manageUsers.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useUser } from '../context/UserContext';

const ManageUsers = () => {
  const { user } = useUser();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from your API (mock function)
    const fetchUsers = async () => {
      if (user.role === "admin") {
        // Replace with your API call
        const response = await fetch('http://localhost:8000/api/users');
        const data = await response.json();
        setUsers(data);
      }
    };

    fetchUsers();
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item.name} - {item.role}</Text>
            {/* Add buttons for editing or deleting users if needed */}
          </View>
        )}
      />
      <Button title="Add User" onPress={() => {/* Navigate to add user page */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  userItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ManageUsers;
