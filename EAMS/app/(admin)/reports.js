// app/(admin)/reports.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useUser } from '../context/UserContext';

const Reports = () => {
  const { user } = useUser();
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      if (user.role === "admin") {
        // Replace with your API call
        const response = await fetch('http://localhost:8000/api/reports');
        const data = await response.json();
        setReports(data);
      }
    };

    fetchReports();
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reports</Text>
      {/* Render the reports here */}
      {reports.map((report) => (
        <View key={report.id} style={styles.reportItem}>
          <Text>{report.title}</Text>
        </View>
      ))}
      <Button title="Generate Report" onPress={() => {/* Add functionality to generate reports */}} />
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
  reportItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Reports;
