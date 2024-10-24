// import { Pressable, StyleSheet, Text, View } from "react-native";
// import React, { useState, useEffect } from "react";
// import moment from "moment";
// import axios from "axios";
// import { AntDesign } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

// const markattendance = () => {
//   const router = useRouter();
//   const [currentDate, setCurrentDate] = useState(moment());

//   const goToNextDay = () => {
//     const nextDate = moment(currentDate).add(1, "days");
//     setCurrentDate(nextDate);
//   };

//   const goToPrevDay = () => {
//     const prevDate = moment(currentDate).subtract(1, "days");
//     setCurrentDate(prevDate);
//   };

//   const formatDate = (date) => {
//     return date.format("MMMM D, YYYY");
//   };

//   const [employees, setEmployees] = useState([]);
//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/employees");
//         setEmployees(response.data);
//       } catch (error) {
//         console.log("error fetching employee data", error);
//       }
//     };
//     fetchEmployeeData();
//   }, []);
//   const [attendance, setAttendance] = useState([]);
//   const fetchAttendanceData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/attendance`, {
//         params: {
//           date: currentDate.format("MMMM D, YYYY"),
//         },
//       });
//       setAttendance(response.data);
//     } catch (error) {
//       console.log("error fetching attendance data", error);
//     }
//   };

//   useEffect(() => {
//     fetchAttendanceData();
//   }, [currentDate]);
//   const employeeWithAttendance = employees.map((employee) => {
//     const attendanceRecord = attendance.find(
//       (record) => record.employeeId === employee.employeeId
//     );

//     return {
//       ...employee,
//       status: attendanceRecord ? attendanceRecord.status : "", // 'Not Marked' or a default status
//     };
//   });
//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }}>
//       <Pressable>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 10,
//             marginLeft: "auto",
//             marginRight: "auto",
//             marginVertical: 20,
//           }}
//         >
//           <AntDesign
//             onPress={goToPrevDay}
//             name="left"
//             size={24}
//             color="black"
//           />
//           <Text>{formatDate(currentDate)}</Text>
//           <AntDesign
//             onPress={goToNextDay}
//             name="right"
//             size={24}
//             color="black"
//           />
//         </View>

//         <View style={{ marginHorizontal: 12 }}>
//           {employeeWithAttendance.map((item, index) => (
//             <Pressable
//               onPress={() =>
//                 router.push({
//                   pathname: "/[user]",
//                   params: {
//                     name: item.employeeName,
//                     id: item.employeeId,
//                     salary: item?.salary,
//                     designation: item?.designation,
//                   },
//                 })
//               }
//               key={index}
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 10,
//                 marginVertical: 10,
//               }}
//             >
//               <View
//                 style={{
//                   width: 50,
//                   height: 50,
//                   borderRadius: 8,
//                   padding: 10,
//                   backgroundColor: "#4b6cb7",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Text style={{ color: "white", fontSize: 16 }}>
//                   {item?.employeeName?.charAt(0)}
//                 </Text>
//               </View>
//               <View style={{flex:1}}>
//                 <Text style={{ fontSize: 16, fontWeight: "bold" }}>
//                   {item?.employeeName}
//                 </Text>
//                 <Text style={{ marginTop: 5, color: "gray" }}>
//                   {item?.designation} ({item?.employeeId})
//                 </Text>
//               </View>
//               {item?.status && (
//                 <View
//                   style={{
//                     width: 50,
//                     height: 50,
//                     borderRadius: 8,
//                     padding: 10,
//                     backgroundColor: "#FF69B4",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Text
//                     style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
//                   >
//                     {item.status.charAt(0)}
//                   </Text>
//                 </View>
//               )}
//             </Pressable>
//           ))}
//         </View>
//       </Pressable>
//     </View>
//   );
// };

// export default markattendance;

// const styles = StyleSheet.create({});


import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons"; // Web-friendly icons
import { useRouter } from "expo-router";

const MarkAttendance = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(moment());

  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, "days");
    setCurrentDate(nextDate);
  };

  const goToPrevDay = () => {
    const prevDate = moment(currentDate).subtract(1, "days");
    setCurrentDate(prevDate);
  };

  const formatDate = (date) => {
    return date.format("MMMM D, YYYY");
  };

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching employee data", error);
      }
    };
    fetchEmployeeData();
  }, []);

  const [attendance, setAttendance] = useState([]);
  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/attendance`, {
        params: {
          date: currentDate.format("MMMM D, YYYY"),
        },
      });
      setAttendance(response.data);
    } catch (error) {
      console.log("error fetching attendance data", error);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, [currentDate]);

  const employeeWithAttendance = employees.map((employee) => {
    const attendanceRecord = attendance.find(
      (record) => record.employeeId === employee.employeeId
    );

    return {
      ...employee,
      status: attendanceRecord ? attendanceRecord.status : "Not Marked", // Display 'Not Marked' as default
    };
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      {/* Back button */}
      <Pressable
        style={styles.backButton}
        onPress={() => router.back()} // Navigate back to the previous screen
      >
        <MaterialIcons name="arrow-back" size={28} color="#7F7FD5" />
      </Pressable>

      {/* Date Picker */}
      <View style={styles.datePickerContainer}>
        <MaterialIcons
          onPress={goToPrevDay}
          name="arrow-back-ios"
          size={24}
          color="#7F7FD5" // Purple color for icons
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
            <View style={[styles.attendanceStatus, { backgroundColor: item?.status === "Present" ? "#4CAF50" : "#FF69B4" }]}>
              <Text style={styles.attendanceText}>{item?.status.charAt(0)}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Styling for the back button
  backButton: {
    position: "absolute",
    top: 40, // Adjust according to the safe area or app layout
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
    backgroundColor: "#7F7FD5", // Purple background for avatar
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
