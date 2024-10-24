import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const MarkAttendance = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(moment());
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);

  // Function to fetch employee data
  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/employees");
      setEmployees(response.data);
    } catch (error) {
      console.log("Error fetching employee data", error);
    }
  };

  // Function to fetch attendance data
  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/attendance", {
        params: {
          date: currentDate.format("MMMM D, YYYY"),
        },
      });
      setAttendance(response.data);
    } catch (error) {
      console.log("Error fetching attendance data", error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  useEffect(() => {
    fetchAttendanceData();
  }, [currentDate]);

  // Function to format the date
  const formatDate = (date) => {
    return date.format("MMMM D, YYYY");
  };

  // Functions to navigate between days
  const goToNextDay = () => {
    setCurrentDate(moment(currentDate).add(1, "days"));
  };

  const goToPrevDay = () => {
    setCurrentDate(moment(currentDate).subtract(1, "days"));
  };

  // Combining employee data with attendance status
  const employeeWithAttendance = employees.map((employee) => {
    const attendanceRecord = attendance.find(
      (record) => record.employeeId === employee.employeeId
    );

    return {
      ...employee,
      status: attendanceRecord ? attendanceRecord.status : "Not Marked",
    };
  });

  return (
    <View style={styles.container}>
      {/* Back button */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <MaterialIcons name="arrow-back" size={28} color="#7F7FD5" />
      </Pressable>

      {/* Date Picker */}
      <View style={styles.datePickerContainer}>
        <MaterialIcons
          onPress={goToPrevDay}
          name="arrow-back-ios"
          size={24}
          color="#7F7FD5"
        />
        <Text style={styles.dateText}>{formatDate(currentDate)}</Text>
        <MaterialIcons
          onPress={goToNextDay}
          name="arrow-forward-ios"
          size={24}
          color="#7F7FD5"
        />
      </View>

      {/* Employee List */}
      <View style={styles.employeeList}>
        {employeeWithAttendance.map((item, index) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/[user]",
                params: {
                  name: item.employeeName,
                  id: item.employeeId,
                  salary: item?.salary,
                  designation: item?.designation,
                },
              })
            }
            key={index}
            style={styles.employeeCard}
          >
            <View style={styles.employeeAvatar}>
              <Text style={styles.avatarText}>{item?.employeeName?.charAt(0)}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.employeeName}>{item?.employeeName}</Text>
              <Text style={styles.employeeDetails}>
                {item?.designation} ({item?.employeeId})
              </Text>
            </View>
            <View style={[
              styles.attendanceStatus,
              { backgroundColor: item?.status === "Present" ? "#4CAF50" : "#FF69B4" }
            ]}>
              <Text style={styles.attendanceText}>{item?.status.charAt(0)}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 1,
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#fff",
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: 10,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 20,
  },
  employeeList: {
    marginHorizontal: 12,
  },
  employeeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  employeeAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#7F7FD5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  avatarText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  employeeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  employeeDetails: {
    marginTop: 5,
    color: "gray",
  },
  attendanceStatus: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  attendanceText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default MarkAttendance;
