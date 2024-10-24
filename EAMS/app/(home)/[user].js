// import {
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Alert,
// } from "react-native";
// import React, { useState } from "react";
// import { useLocalSearchParams } from "expo-router";
// import moment from "moment";
// import { AntDesign } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import axios from "axios";

// const user = () => {
//   const params = useLocalSearchParams();
//   const [attendanceStatus, setAttendanceStatus] = useState("present");
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
//   const submitAttendance = async () => {
//     try {
//       const attendanceData = {
//         employeeId: params?.id,
//         employeeName: params?.name,
//         date: currentDate.format("MMMM D, YYYY"),
//         status: attendanceStatus,
//       };
//       const response = await axios.post(
//         "http://localhost:8000/attendance",
//         attendanceData
//       );

//       if (response.status === 200) {
//         Alert.alert(`Attendance submitted successfully for ${params?.name}`);
//       }
//     } catch (error) {
//       console.log("error submitting attendance", error);
//     }
//   };
//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }}>
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           gap: 10,
//           marginLeft: "auto",
//           marginRight: "auto",
//           marginVertical: 20,
//         }}
//       >
//         <AntDesign onPress={goToPrevDay} name="left" size={24} color="black" />
//         <Text>{formatDate(currentDate)}</Text>
//         <AntDesign onPress={goToNextDay} name="right" size={24} color="black" />
//       </View>

//       <Pressable
//         style={{
//           marginVertical: 10,
//           marginHorizontal: 12,
//           flexDirection: "row",
//           gap: 10,
//         }}
//       >
//         <View
//           style={{
//             width: 50,
//             height: 50,
//             borderRadius: 8,
//             padding: 10,
//             backgroundColor: "#4b6cb7",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Text style={{ color: "white", fontSize: 16 }}>
//             {params?.name.charAt(0)}
//           </Text>
//         </View>
//         <View>
//           <Text style={{ fontSize: 16, fontWeight: "bold" }}>
//             {params?.name}
//           </Text>
//           <Text style={{ marginTop: 5, color: "gray" }}>
//             {params?.designation} ({params?.id})
//           </Text>
//         </View>
//       </Pressable>
//       <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 12 }}>
//         Basic Pay : {params?.salary}
//       </Text>
//       <View style={{ marginHorizontal: 12 }}>
//         <Text
//           style={{
//             fontSize: 16,
//             fontWeight: "500",
//             letterSpacing: 3,
//             marginTop: 7,
//           }}
//         >
//           ATTENDANCE
//         </Text>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 16,
//             marginVertical: 10,
//           }}
//         >
//           <Pressable
//             onPress={() => setAttendanceStatus("present")}
//             style={{
//               backgroundColor: "#C4E0E5",
//               padding: 10,
//               borderRadius: 8,
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 10,
//               flex: 1,
//             }}
//           >
//             {attendanceStatus === "present" ? (
//               <FontAwesome5 name="dot-circle" size={24} color="black" />
//             ) : (
//               <Entypo name="circle" size={24} color="black" />
//             )}
//             <Text>Present</Text>
//           </Pressable>

//           <Pressable
//             onPress={() => setAttendanceStatus("absent")}
//             style={{
//               backgroundColor: "#C4E0E5",
//               padding: 10,
//               borderRadius: 8,
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 10,
//               flex: 1,
//             }}
//           >
//             {attendanceStatus === "absent" ? (
//               <FontAwesome5 name="dot-circle" size={24} color="black" />
//             ) : (
//               <Entypo name="circle" size={24} color="black" />
//             )}
//             <Text>Absent</Text>
//           </Pressable>
//         </View>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 16,
//             marginVertical: 10,
//           }}
//         >
//           <Pressable
//             onPress={() => setAttendanceStatus("halfday")}
//             style={{
//               backgroundColor: "#C4E0E5",
//               padding: 10,
//               borderRadius: 8,
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 10,
//               flex: 1,
//             }}
//           >
//             {attendanceStatus === "halfday" ? (
//               <FontAwesome5 name="dot-circle" size={24} color="black" />
//             ) : (
//               <Entypo name="circle" size={24} color="black" />
//             )}
//             <Text>Half Day</Text>
//           </Pressable>

//           <Pressable
//             onPress={() => setAttendanceStatus("holiday")}
//             style={{
//               backgroundColor: "#C4E0E5",
//               padding: 10,
//               borderRadius: 8,
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 10,
//               flex: 1,
//             }}
//           >
//             {attendanceStatus === "holiday" ? (
//               <FontAwesome5 name="dot-circle" size={24} color="black" />
//             ) : (
//               <Entypo name="circle" size={24} color="black" />
//             )}
//             <Text>Holiday</Text>
//           </Pressable>
//         </View>
//         <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
//           <TextInput
//             style={{
//               borderRadius: 6,
//               marginTop: 10,
//               borderWidth: 2,
//               borderColor: "#E0E0E0",
//               padding: 10,
//               flex: 1,
//             }}
//             placeholderTextColor="black"
//             placeholder="Advance / Loans"
//           />
//           <TextInput
//             style={{
//               borderRadius: 6,
//               marginTop: 10,
//               borderWidth: 2,
//               borderColor: "#E0E0E0",
//               padding: 10,
//               flex: 1,
//             }}
//             placeholderTextColor="black"
//             placeholder="Extra Bonus"
//           />
//         </View>

//         <Pressable
//           onPress={submitAttendance}
//           style={{
//             padding: 15,
//             backgroundColor: "#00c6ff",
//             width: 200,
//             marginLeft: "auto",
//             marginRight: "auto",
//             marginTop: 30,
//             borderRadius: 6,
//           }}
//         >
//           <Text
//             style={{ textAlign: "center", color: "white", fontWeight: "500" }}
//           >
//             Submit Attendance
//           </Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default user;

// const styles = StyleSheet.create({});








//bas
// import {
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Alert,
// } from "react-native";
// import React, { useState } from "react";
// import { useLocalSearchParams } from "expo-router";
// import moment from "moment";
// import { AntDesign } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import axios from "axios";

// const User = () => {
//   const params = useLocalSearchParams();
//   const [attendanceStatus, setAttendanceStatus] = useState("present");
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

//   const submitAttendance = async () => {
//     try {
//       const attendanceData = {
//         employeeId: params?.id,
//         employeeName: params?.name,
//         date: currentDate.format("MMMM D, YYYY"),
//         status: attendanceStatus,
//       };
//       const response = await axios.post(
//         "http://localhost:8000/attendance",
//         attendanceData
//       );

//       if (response.status === 200) {
//         Alert.alert(`Attendance submitted successfully for ${params?.name}`);
//       }
//     } catch (error) {
//       console.log("Error submitting attendance", error);
//     }
//   };

//   if (!params?.name || !params?.id || !params?.designation || !params?.salary) {
//     return (
//       <View style={styles.errorContainer}>
//         <Text style={styles.errorText}>Error: Missing user details</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }}>
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           gap: 10,
//           marginLeft: "auto",
//           marginRight: "auto",
//           marginVertical: 20,
//         }}
//       >
//         <AntDesign onPress={goToPrevDay} name="left" size={24} color="black" />
//         <Text>{formatDate(currentDate)}</Text>
//         <AntDesign onPress={goToNextDay} name="right" size={24} color="black" />
//       </View>

//       <Pressable
//         style={{
//           marginVertical: 10,
//           marginHorizontal: 12,
//           flexDirection: "row",
//           gap: 10,
//         }}
//       >
//         <View
//           style={{
//             width: 50,
//             height: 50,
//             borderRadius: 8,
//             padding: 10,
//             backgroundColor: "#4b6cb7",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Text style={{ color: "white", fontSize: 16 }}>
//             {params?.name?.charAt(0) || "?"}
//           </Text>
//         </View>
//         <View>
//           <Text style={{ fontSize: 16, fontWeight: "bold" }}>
//             {params?.name}
//           </Text>
//           <Text style={{ marginTop: 5, color: "gray" }}>
//             {params?.designation} ({params?.id})
//           </Text>
//         </View>
//       </Pressable>
//       <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 12 }}>
//         Basic Pay: {params?.salary}
//       </Text>
//       <View style={{ marginHorizontal: 12 }}>
//         <Text
//           style={{
//             fontSize: 16,
//             fontWeight: "500",
//             letterSpacing: 3,
//             marginTop: 7,
//           }}
//         >
//           ATTENDANCE
//         </Text>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 16,
//             marginVertical: 10,
//           }}
//         >
//           <Pressable
//             onPress={() => setAttendanceStatus("present")}
//             style={{
//               backgroundColor: "#C4E0E5",
//               padding: 10,
//               borderRadius: 8,
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 10,
//               flex: 1,
//             }}
//           >
//             {attendanceStatus === "present" ? (
//               <FontAwesome5 name="dot-circle" size={24} color="black" />
//             ) : (
//               <Entypo name="circle" size={24} color="black" />
//             )}
//             <Text>Present</Text>
//           </Pressable>

//           <Pressable
//             onPress={() => setAttendanceStatus("absent")}
//             style={{
//               backgroundColor: "#C4E0E5",
//               padding: 10,
//               borderRadius: 8,
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 10,
//               flex: 1,
//             }}
//           >
//             {attendanceStatus === "absent" ? (
//               <FontAwesome5 name="dot-circle" size={24} color="black" />
//             ) : (
//               <Entypo name="circle" size={24} color="black" />
//             )}
//             <Text>Absent</Text>
//           </Pressable>
//         </View>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 16,
//             marginVertical: 10,
//           }}
//         >
//           <Pressable
//             onPress={() => setAttendanceStatus("halfday")}
//             style={{
//               backgroundColor: "#C4E0E5",
//               padding: 10,
//               borderRadius: 8,
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 10,
//               flex: 1,
//             }}
//           >
//             {attendanceStatus === "halfday" ? (
//               <FontAwesome5 name="dot-circle" size={24} color="black" />
//             ) : (
//               <Entypo name="circle" size={24} color="black" />
//             )}
//             <Text>Half Day</Text>
//           </Pressable>

//           <Pressable
//             onPress={() => setAttendanceStatus("holiday")}
//             style={{
//               backgroundColor: "#C4E0E5",
//               padding: 10,
//               borderRadius: 8,
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 10,
//               flex: 1,
//             }}
//           >
//             {attendanceStatus === "holiday" ? (
//               <FontAwesome5 name="dot-circle" size={24} color="black" />
//             ) : (
//               <Entypo name="circle" size={24} color="black" />
//             )}
//             <Text>Holiday</Text>
//           </Pressable>
//         </View>
//         <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
//           <TextInput
//             style={{
//               borderRadius: 6,
//               marginTop: 10,
//               borderWidth: 2,
//               borderColor: "#E0E0E0",
//               padding: 10,
//               flex: 1,
//             }}
//             placeholderTextColor="black"
//             placeholder="Advance / Loans"
//           />
//           <TextInput
//             style={{
//               borderRadius: 6,
//               marginTop: 10,
//               borderWidth: 2,
//               borderColor: "#E0E0E0",
//               padding: 10,
//               flex: 1,
//             }}
//             placeholderTextColor="black"
//             placeholder="Extra Bonus"
//           />
//         </View>

//         <Pressable
//           onPress={submitAttendance}
//           style={{
//             padding: 15,
//             backgroundColor: "#00c6ff",
//             width: 200,
//             marginLeft: "auto",
//             marginRight: "auto",
//             marginTop: 30,
//             borderRadius: 6,
//           }}
//         >
//           <Text
//             style={{ textAlign: "center", color: "white", fontWeight: "500" }}
//           >
//             Submit Attendance
//           </Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default User;

// const styles = StyleSheet.create({
//   errorContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   errorText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "red",
//   },
// });










import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons"; // Use MaterialIcons for web-friendly icons
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";

const User = () => {
  const params = useLocalSearchParams();
  const router = useRouter(); // To handle the back navigation
  const [attendanceStatus, setAttendanceStatus] = useState("present");
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

  const submitAttendance = async () => {
    try {
      const attendanceData = {
        employeeId: params?.id,
        employeeName: params?.name,
        date: currentDate.format("MMMM D, YYYY"),
        status: attendanceStatus,
      };
      const response = await axios.post(
        "http://localhost:8000/attendance",
        attendanceData
      );

      if (response.status === 200) {
        Alert.alert(`Attendance submitted successfully for ${params?.name}`);
      }
    } catch (error) {
      console.log("Error submitting attendance", error);
    }
  };

  if (!params?.name || !params?.id || !params?.designation || !params?.salary) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: Missing user details</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Back Button */}
      <Pressable
        style={styles.backButton}
        onPress={() => router.back()} // Navigate back
      >
        <MaterialIcons name="arrow-back" size={24} color="#7F7FD5" />
        <Text style={styles.backText}>Back</Text>
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
        }}
      >
        <MaterialIcons onPress={goToPrevDay} name="arrow-back-ios" size={24} color="#7F7FD5" />
        <Text style={styles.dateText}>{formatDate(currentDate)}</Text>
        <MaterialIcons onPress={goToNextDay} name="arrow-forward-ios" size={24} color="#7F7FD5" />
      </View>

      <Pressable
        style={{
          marginVertical: 10,
          marginHorizontal: 12,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>
            {params?.name?.charAt(0) || "?"}
          </Text>
        </View>
        <View>
          <Text style={styles.employeeName}>{params?.name}</Text>
          <Text style={styles.employeeDetails}>
            {params?.designation} ({params?.id})
          </Text>
        </View>
      </Pressable>
      <Text style={styles.salaryText}>
        Basic Pay: {params?.salary}
      </Text>
      <View style={{ marginHorizontal: 12 }}>
        <Text style={styles.attendanceHeader}>ATTENDANCE</Text>
        <View style={styles.attendanceOptions}>
          <Pressable
            onPress={() => setAttendanceStatus("present")}
            style={[
              styles.attendanceButton,
              { backgroundColor: attendanceStatus === "present" ? "#7F7FD5" : "#C4E0E5" },
            ]}
          >
            {attendanceStatus === "present" ? (
              <FontAwesome5 name="dot-circle" size={24} color="white" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text style={styles.buttonText}>Present</Text>
          </Pressable>

          <Pressable
            onPress={() => setAttendanceStatus("absent")}
            style={[
              styles.attendanceButton,
              { backgroundColor: attendanceStatus === "absent" ? "#7F7FD5" : "#C4E0E5" },
            ]}
          >
            {attendanceStatus === "absent" ? (
              <FontAwesome5 name="dot-circle" size={24} color="white" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text style={styles.buttonText}>Absent</Text>
          </Pressable>
        </View>
        <View style={styles.attendanceOptions}>
          <Pressable
            onPress={() => setAttendanceStatus("halfday")}
            style={[
              styles.attendanceButton,
              { backgroundColor: attendanceStatus === "halfday" ? "#7F7FD5" : "#C4E0E5" },
            ]}
          >
            {attendanceStatus === "halfday" ? (
              <FontAwesome5 name="dot-circle" size={24} color="white" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text style={styles.buttonText}>Half Day</Text>
          </Pressable>

          <Pressable
            onPress={() => setAttendanceStatus("holiday")}
            style={[
              styles.attendanceButton,
              { backgroundColor: attendanceStatus === "holiday" ? "#7F7FD5" : "#C4E0E5" },
            ]}
          >
            {attendanceStatus === "holiday" ? (
              <FontAwesome5 name="dot-circle" size={24} color="white" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text style={styles.buttonText}>Holiday</Text>
          </Pressable>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="Advance / Loans"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="Extra Bonus"
          />
        </View>

        <Pressable
          onPress={submitAttendance}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>Submit Attendance</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  backText: {
    fontSize: 16,
    color: "#7F7FD5",
    marginLeft: 5,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7F7FD5",
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#7F7FD5", // Purple background
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  employeeName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  employeeDetails: {
    marginTop: 5,
    color: "gray",
  },
  salaryText: {
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 12,
  },
  attendanceHeader: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 3,
    marginTop: 7,
  },
  attendanceOptions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginVertical: 10,
  },
  attendanceButton: {
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
  input: {
    borderRadius: 6,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    padding: 10,
    flex: 1,
  },
  submitButton: {
    padding: 15,
    backgroundColor: "#7F7FD5",
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    borderRadius: 6,
  },
  submitButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  },
});
