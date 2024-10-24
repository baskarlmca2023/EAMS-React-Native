
// // app/(home)/index.js
// import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
// import React from "react";
// import { LinearGradient } from "expo-linear-gradient";
// import { Feather, Entypo, Ionicons, Octicons } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

// const index = () => {
//     const router = useRouter();
//   return (
//     <ScrollView>
//       <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
//         <View style={{ padding: 12 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Feather name="bar-chart" size={24} color="black" />
//             <Text style={{ fontSize: 16, fontWeight: "600" }}>
//               Employee Managament System
//             </Text>
//             <Entypo name="lock" size={24} color="black" />
//           </View>

//           <View
//             style={{
//               marginTop: 20,
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 20,
//             }}
//           >
//             <Pressable
//            onPress={() => router.push("/(home)/employees")}
//               style={{
//                 backgroundColor: "#D3CCE3",
//                 padding: 12,
//                 borderRadius: 6,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flex: 1,
//               }}
//             >
//               <View
//                 style={{
//                   width: 50,
//                   height: 50,
//                   borderRadius: 25,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Ionicons name="ios-people-sharp" size={24} color="black" />
//               </View>
//               <Text style={{ marginTop: 7, fontWeight: "600" }}>
//                 Employee List
//               </Text>
//             </Pressable>
//             <Pressable
//               onPress={() => router.push("/(home)/markattendance")}
//               style={{
//                 backgroundColor: "#D3CCE3",
//                 padding: 12,
//                 borderRadius: 6,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flex: 1,
//               }}
//             >
//               <View
//                 style={{
//                   width: 50,
//                   height: 50,
//                   borderRadius: 25,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Ionicons name="ios-people-sharp" size={24} color="black" />
//               </View>
//               <Text style={{ marginTop: 7, fontWeight: "600" }}>
//                 Mark Attendance
//               </Text>
//             </Pressable>
//           </View>
//           <View
//             style={{
//               marginTop: 20,
//               backgroundColor: "white",
//               paddingHorizontal: 10,
//               paddingVertical: 10,
//               borderRadius: 7,
//             }}
//           >
//             <Pressable
//               style={{
//                 backgroundColor: "#BE93C5",
//                 borderRadius: 6,
//                 padding: 10,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginVertical: 10,
//               }}
//             >
//               <View
//                 style={{
//                   padding: 7,
//                   width: 45,
//                   height: 45,
//                   borderRadius: 7,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Ionicons name="newspaper-outline" size={24} color="black" />
//               </View>
//               <Text
//                 style={{
//                   marginLeft: 10,
//                   fontSize: 16,
//                   fontWeight: "600",
//                   flex: 1,
//                 }}
//               >
//                 Attendance Report
//               </Text>
//               <View
//                 style={{
//                   width: 35,
//                   height: 35,
//                   borderRadius: 7,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//             <Pressable
//                 onPress={() => router.push("/(home)/summary")}
//               style={{
//                 backgroundColor: "#BE93C5",
//                 borderRadius: 6,
//                 padding: 10,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginVertical: 10,
//               }}
//             >
//               <View
//                 style={{
//                   padding: 7,
//                   width: 45,
//                   height: 45,
//                   borderRadius: 7,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Octicons name="repo-pull" size={24} color="black" />
//               </View>
//               <Text
//                 style={{
//                   marginLeft: 10,
//                   fontSize: 16,
//                   fontWeight: "600",
//                   flex: 1,
//                 }}
//               >
//                 Summary Report
//               </Text>
//               <View
//                 style={{
//                   width: 35,
//                   height: 35,
//                   borderRadius: 7,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//             <Pressable
//               style={{
//                 backgroundColor: "#BE93C5",
//                 borderRadius: 6,
//                 padding: 10,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginVertical: 10,
//               }}
//             >
//               <View
//                 style={{
//                   padding: 7,
//                   width: 45,
//                   height: 45,
//                   borderRadius: 7,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Octicons name="report" size={24} color="black" />
//               </View>
//               <Text
//                 style={{
//                   marginLeft: 10,
//                   fontSize: 16,
//                   fontWeight: "600",
//                   flex: 1,
//                 }}
//               >
//                 All Generate Reports
//               </Text>
//               <View
//                 style={{
//                   width: 35,
//                   height: 35,
//                   borderRadius: 7,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//             <Pressable
//               style={{
//                 backgroundColor: "#BE93C5",
//                 borderRadius: 6,
//                 padding: 10,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginVertical: 10,
//               }}
//             >
//               <View
//                 style={{
//                   padding: 7,
//                   width: 45,
//                   height: 45,
//                   borderRadius: 7,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Ionicons name="people" size={24} color="black" />
//               </View>
//               <Text
//                 style={{
//                   marginLeft: 10,
//                   fontSize: 16,
//                   fontWeight: "600",
//                   flex: 1,
//                 }}
//               >
//                 Overtime Employees
//               </Text>
//               <View
//                 style={{
//                   width: 35,
//                   height: 35,
//                   borderRadius: 7,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//           </View>
//           <View
//             style={{
//               marginTop: 20,
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 12,
//             }}
//           >
//             <View
//               style={{
//                 backgroundColor: "#f79d00",
//                 borderRadius: 6,
//                 padding: 12,
//                 alignItems: "center",

//                 justifyContent: "center",
//                 flex: 1,
//               }}
//             >
//               <View
//                 style={{
//                   width: 35,
//                   height: 35,
//                   borderRadius: 7,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <MaterialCommunityIcons
//                   name="guy-fawkes-mask"
//                   size={24}
//                   color="black"
//                 />
//               </View>
//               <Text style={{ marginTop: 7 }}>Attendance Criteria</Text>
//             </View>
//             <View
//               style={{
//                 backgroundColor: "#ABCABA",
//                 borderRadius: 6,
//                 padding: 12,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flex: 1,
//               }}
//             >
//               <View
//                 style={{
//                   width: 35,
//                   height: 35,
//                   borderRadius: 7,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Feather name="bar-chart" size={24} color="black" />
//               </View>
//               <Text style={{ marginTop: 7 }}>Increased Workflow</Text>
//             </View>
//           </View>
//           <View
//             style={{
//               marginTop: 20,
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 12,
//             }}
//           >
//             <View
//               style={{
//                 backgroundColor: "#D3CCE3",
//                 borderRadius: 6,
//                 padding: 12,
//                 alignItems: "center",

//                 justifyContent: "center",
//                 flex: 1,
//               }}
//             >
//               <View
//                 style={{
//                   width: 35,
//                   height: 35,
//                   borderRadius: 7,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <MaterialCommunityIcons
//                   name="guy-fawkes-mask"
//                   size={24}
//                   color="black"
//                 />
//               </View>
//               <Text style={{ marginTop: 7 }}>Cost Savings</Text>
//             </View>
//             <View
//               style={{
//                 backgroundColor: "#bdc3c7",
//                 borderRadius: 6,
//                 padding: 12,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flex: 1,
//               }}
//             >
//               <View
//                 style={{
//                   width: 35,
//                   height: 35,
//                   borderRadius: 7,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Feather name="bar-chart" size={24} color="black" />
//               </View>
//               <Text style={{ marginTop: 7 }}>Employee Performance</Text>
//             </View>
//           </View>
//         </View>
//       </LinearGradient>
//     </ScrollView>
//   );
// };

// export default index;

// const styles = StyleSheet.create({});









// //baskar
// // app/(home)/index.js
// import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
// import React from "react";
// import { LinearGradient } from "expo-linear-gradient";
// import { Feather, Entypo, MaterialCommunityIcons } from "@expo/vector-icons"; // Removed Ionicons and Octicons
// import { useRouter } from "expo-router";

// const index = () => {
//   const router = useRouter();
//   return (
//     <ScrollView>
//       <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
//         <View style={{ padding: 12 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Feather name="bar-chart" size={24} color="black" />
//             <Text style={{ fontSize: 16, fontWeight: "600" }}>
//               Employee Management System
//             </Text>
//             <Pressable onPress={() => router.push("(auth)/login")}>
//               <MaterialCommunityIcons name="logout" size={24} color="black" />
//             </Pressable>
//           </View>

//           <View
//             style={{
//               marginTop: 20,
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 20,
//             }}
//           >
//             <Pressable
//               onPress={() => router.push("/(home)/employees")}
//               style={styles.card}
//             >
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons
//                   name="account-group"
//                   size={24}
//                   color="black"
//                 />
//               </View>
//               <Text style={styles.cardText}>Employee List</Text>
//             </Pressable>
//             <Pressable
//               onPress={() => router.push("/(home)/markattendance")}
//               style={styles.card}
//             >
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons
//                   name="check-circle"
//                   size={24}
//                   color="black"
//                 />
//               </View>
//               <Text style={styles.cardText}>Mark Attendance</Text>
//             </Pressable>
//           </View>

//           <View style={styles.reportContainer}>
//             <Pressable
//               onPress={() => router.push("/(home)/attendance-report")}
//               style={styles.reportCard}
//             >
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="file-document" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>Attendance Report</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>

//             <Pressable
//               onPress={() => router.push("/(home)/summary")}
//               style={styles.reportCard}
//             >
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="file-document-outline" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>Summary Report</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>

//             <Pressable
//             onPress={() => router.push("/(home)/allGenerateReports")}
//               style={styles.reportCard}
//             >
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="file-chart" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>All Generate Reports</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>

//             <Pressable
//             onPress={() => router.push("/(home)/overtimeEmployees")}
//               style={styles.reportCard}
//             >
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="account-clock" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>Overtime Employees</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//           </View>

//           <View style={styles.criteriaContainer}>
//             <View style={styles.criteriaCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
//               </View>
//               <Text style={styles.criteriaText}>Attendance Criteria</Text>
//             </View>
//             <View style={styles.criteriaCard}>
//               <View style={styles.iconContainer}>
//                 <Feather name="bar-chart" size={24} color="black" />
//               </View>
//               <Text style={styles.criteriaText}>Increased Workflow</Text>
//             </View>
//           </View>

//           <View style={styles.criteriaContainer}>
//             <View style={styles.criteriaCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
//               </View>
//               <Text style={styles.criteriaText}>Cost Savings</Text>
//             </View>
//             <View style={styles.criteriaCard}>
//               <View style={styles.iconContainer}>
//                 <Feather name="bar-chart" size={24} color="black" />
//               </View>
//               <Text style={styles.criteriaText}>Employee Performance</Text>
//             </View>
//           </View>
//         </View>
//       </LinearGradient>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#D3CCE3",
//     padding: 12,
//     borderRadius: 6,
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   cardText: {
//     marginTop: 7,
//     fontWeight: "600",
//   },
//   reportContainer: {
//     marginTop: 20,
//     backgroundColor: "white",
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     borderRadius: 7,
//   },
//   reportCard: {
//     backgroundColor: "#BE93C5",
//     borderRadius: 6,
//     padding: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   reportText: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontWeight: "600",
//     flex: 1,
//   },
//   chevronContainer: {
//     width: 35,
//     height: 35,
//     borderRadius: 7,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   criteriaContainer: {
//     marginTop: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 12,
//   },
//   criteriaCard: {
//     backgroundColor: "#f79d00",
//     borderRadius: 6,
//     padding: 12,
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   criteriaText: {
//     marginTop: 7,
//   },
//   iconContainer: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default index;









// // app/(home)/index.js
// import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
// import React from "react";
// import { LinearGradient } from "expo-linear-gradient";
// import { Feather, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

// const index = () => {
//   const router = useRouter();

//   return (
//     <ScrollView>
//       <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
//         <View style={{ padding: 12 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Feather name="bar-chart" size={24} color="black" />
//             <Text style={{ fontSize: 16, fontWeight: "600" }}>
//               Employee Management System
//             </Text>
//             <Pressable onPress={() => router.push("(auth)/login")}>
//               <MaterialCommunityIcons name="logout" size={24} color="black" />
//             </Pressable>
//           </View>

//           {/* Employee Section */}
//           <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap: 20 }}>
//             <Pressable onPress={() => router.push("/(home)/employees")} style={styles.card}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="account-group" size={24} color="black" />
//               </View>
//               <Text style={styles.cardText}>Employee List</Text>
//             </Pressable>
//             <Pressable onPress={() => router.push("/(home)/markattendance")} style={styles.card}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="check-circle" size={24} color="black" />
//               </View>
//               <Text style={styles.cardText}>Mark Attendance</Text>
//             </Pressable>
//           </View>

//           {/* Admin Section */}
//           <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap: 20 }}>
//             <Pressable onPress={() => router.push("/(admin)/dashboard")} style={styles.card}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="view-dashboard" size={24} color="black" />
//               </View>
//               <Text style={styles.cardText}>Admin Dashboard</Text>
//             </Pressable>
//             <Pressable onPress={() => router.push("/(admin)/manageUsers")} style={styles.card}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="account-cog" size={24} color="black" />
//               </View>
//               <Text style={styles.cardText}>Manage Users</Text>
//             </Pressable>
//           </View>

//           {/* Report Section */}
//           <View style={styles.reportContainer}>
//             <Pressable onPress={() => router.push("/(home)/attendance-report")} style={styles.reportCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="file-document" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>Attendance Report</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//             <Pressable onPress={() => router.push("/(home)/summary")} style={styles.reportCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="file-document-outline" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>Summary Report</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//             <Pressable style={styles.reportCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="file-chart" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>All Generate Reports</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//             <Pressable style={styles.reportCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="account-clock" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>Overtime Employees</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//           </View>

//           {/* Criteria Section */}
//           <View style={styles.criteriaContainer}>
//             <View style={styles.criteriaCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
//               </View>
//               <Text style={styles.criteriaText}>Attendance Criteria</Text>
//             </View>
//             <View style={styles.criteriaCard}>
//               <View style={styles.iconContainer}>
//                 <Feather name="bar-chart" size={24} color="black" />
//               </View>
//               <Text style={styles.criteriaText}>Increased Workflow</Text>
//             </View>
//           </View>
//           <View style={styles.criteriaContainer}>
//             <View style={styles.criteriaCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
//               </View>
//               <Text style={styles.criteriaText}>Cost Savings</Text>
//             </View>
//             <View style={styles.criteriaCard}>
//               <View style={styles.iconContainer}>
//                 <Feather name="bar-chart" size={24} color="black" />
//               </View>
//               <Text style={styles.criteriaText}>Employee Performance</Text>
//             </View>
//           </View>
//         </View>
//       </LinearGradient>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#D3CCE3",
//     padding: 12,
//     borderRadius: 6,
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   cardText: {
//     marginTop: 7,
//     fontWeight: "600",
//   },
//   reportContainer: {
//     marginTop: 20,
//     backgroundColor: "white",
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     borderRadius: 7,
//   },
//   reportCard: {
//     backgroundColor: "#BE93C5",
//     borderRadius: 6,
//     padding: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   reportText: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontWeight: "600",
//     flex: 1,
//   },
//   chevronContainer: {
//     width: 35,
//     height: 35,
//     borderRadius: 7,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   criteriaContainer: {
//     marginTop: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 12,
//   },
//   criteriaCard: {
//     backgroundColor: "#f79d00",
//     borderRadius: 6,
//     padding: 12,
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   criteriaText: {
//     marginTop: 7,
//   },
//   iconContainer: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default index;






// // app/(home)/index.js
// import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
// import React, { useEffect, useState } from "react";
// import { LinearGradient } from "expo-linear-gradient";
// import { Feather, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

// const Index = () => {
//   const [userRole, setUserRole] = useState(null); // Assume you get user role from your app's state
//   const router = useRouter();

//   // Function to fetch the user role (this is just an example)
//   const fetchUserRole = async () => {
//     // Implement your logic to get user role from storage or context
//     const user = await getCurrentUser(); // Replace with your method to get user
//     setUserRole(user.role);
//   };

//   useEffect(() => {
//     fetchUserRole();
//   }, []);

//   return (
//     <ScrollView>
//       <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
//         <View style={{ padding: 12 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Feather name="bar-chart" size={24} color="black" />
//             <Text style={{ fontSize: 16, fontWeight: "600" }}>
//               Employee Management System
//             </Text>
//             <Pressable onPress={() => router.push("(auth)/login")}>
//               <MaterialCommunityIcons name="logout" size={24} color="black" />
//             </Pressable>
//           </View>

//           {/* Employee Section */}
//           <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap: 20 }}>
//             <Pressable onPress={() => router.push("/(home)/employees")} style={styles.card}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="account-group" size={24} color="black" />
//               </View>
//               <Text style={styles.cardText}>Employee List</Text>
//             </Pressable>
//             <Pressable onPress={() => router.push("/(home)/markattendance")} style={styles.card}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="check-circle" size={24} color="black" />
//               </View>
//               <Text style={styles.cardText}>Mark Attendance</Text>
//             </Pressable>
//           </View>

//           {/* Admin Section - Only show if the user is an admin */}
//           {userRole === 'admin' && (
//             <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap: 20 }}>
//               <Pressable onPress={() => router.push("/(admin)/dashboard")} style={styles.card}>
//                 <View style={styles.iconContainer}>
//                   <MaterialCommunityIcons name="view-dashboard" size={24} color="black" />
//                 </View>
//                 <Text style={styles.cardText}>Admin Dashboard</Text>
//               </Pressable>
//               <Pressable onPress={() => router.push("/(admin)/manageUsers")} style={styles.card}>
//                 <View style={styles.iconContainer}>
//                   <MaterialCommunityIcons name="account-cog" size={24} color="black" />
//                 </View>
//                 <Text style={styles.cardText}>Manage Users</Text>
//               </Pressable>
//             </View>
//           )}

//           {/* Report Section */}
//           <View style={styles.reportContainer}>
//             <Pressable onPress={() => router.push("/(home)/attendance-report")} style={styles.reportCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="file-document" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>Attendance Report</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//             <Pressable onPress={() => router.push("/(home)/summary")} style={styles.reportCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="file-document-outline" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>Summary Report</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//             <Pressable style={styles.reportCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="file-chart" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>All Generate Reports</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//             <Pressable style={styles.reportCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="account-clock" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>Overtime Employees</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//           </View>

//           {/* Criteria Section */}
//           <View style={styles.criteriaContainer}>
//             <View style={styles.criteriaCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
//               </View>
//               <Text style={styles.criteriaText}>Attendance Criteria</Text>
//             </View>
//             <View style={styles.criteriaCard}>
//               <View style={styles.iconContainer}>
//                 <Feather name="bar-chart" size={24} color="black" />
//               </View>
//               <Text style={styles.criteriaText}>Increased Workflow</Text>
//             </View>
//           </View>
//           <View style={styles.criteriaContainer}>
//             <View style={styles.criteriaCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
//               </View>
//               <Text style={styles.criteriaText}>Attendance Criteria</Text>
//             </View>
//             <View style={styles.criteriaCard}>
//               <View style={styles.iconContainer}>
//                 <Feather name="bar-chart" size={24} color="black" />
//               </View>
//               <Text style={styles.criteriaText}>Increased Workflow</Text>
//             </View>
//           </View>
//         </View>
//       </LinearGradient>
//     </ScrollView>
//   );
//  };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#D3CCE3",
//     padding: 12,
//     borderRadius: 6,
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   cardText: {
//     marginTop: 7,
//     fontWeight: "600",
//   },
//   reportContainer: {
//     marginTop: 20,
//     backgroundColor: "white",
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     borderRadius: 7,
//   },
//   reportCard: {
//     backgroundColor: "#BE93C5",
//     borderRadius: 6,
//     padding: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   reportText: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontWeight: "600",
//     flex: 1,
//   },
//   chevronContainer: {
//     width: 35,
//     height: 35,
//     borderRadius: 7,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   criteriaContainer: {
//     marginTop: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 12,
//   },
//   criteriaCard: {
//     backgroundColor: "#f79d00",
//     borderRadius: 6,
//     padding: 12,
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   criteriaText: {
//     marginTop: 7,
//   },
//   iconContainer: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default Index;




























// import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
// import React, { useEffect, useState } from "react";
// import { LinearGradient } from "expo-linear-gradient";
// import { Feather, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Index = () => {
//   const [userRole, setUserRole] = useState(null);  // To store the user role
//   const router = useRouter();

//   // Fetch the user's role from AsyncStorage
//   const fetchUserRole = async () => {
//     const storedRole = await AsyncStorage.getItem("userRole");
//     setUserRole(storedRole);  // Set the user role in state
//   };

//   useEffect(() => {
//     fetchUserRole();
//   }, []);

//   return (
//     <ScrollView>
//       <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
//         <View style={{ padding: 12 }}>
//           <View style={styles.header}>
//             <Feather name="bar-chart" size={24} color="black" />
//             <Text style={styles.headerText}>Employee Management System</Text>
//             <Pressable onPress={() => router.push("(auth)/login")}>
//               <MaterialCommunityIcons name="logout" size={24} color="black" />
//             </Pressable>
//           </View>

//           {/* Employee Section - Accessible to both users and admins */}
//           <View style={styles.section}>
//             <Pressable onPress={() => router.push("/(home)/employees")} style={styles.card}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="account-group" size={24} color="black" />
//               </View>
//               <Text style={styles.cardText}>Employee List</Text>
//             </Pressable>
//             <Pressable onPress={() => router.push("/(home)/markattendance")} style={styles.card}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="check-circle" size={24} color="black" />
//               </View>
//               <Text style={styles.cardText}>Mark Attendance</Text>
//             </Pressable>
//           </View>

//           {/* Admin Section - Only visible to users with the role of 'admin' */}
//           {userRole === 'admin' && (
//             <View style={styles.section}>
//               <Pressable onPress={() => router.push("/(admin)/dashboard")} style={styles.card}>
//                 <View style={styles.iconContainer}>
//                   <MaterialCommunityIcons name="view-dashboard" size={24} color="black" />
//                 </View>
//                 <Text style={styles.cardText}>Admin Dashboard</Text>
//               </Pressable>
//               <Pressable onPress={() => router.push("/(admin)/manageUsers")} style={styles.card}>
//                 <View style={styles.iconContainer}>
//                   <MaterialCommunityIcons name="account-cog" size={24} color="black" />
//                 </View>
//                 <Text style={styles.cardText}>Manage Users</Text>
//               </Pressable>
//             </View>
//           )}

//           {/* Report Section - Accessible to both users and admins */}
//           <View style={styles.reportContainer}>
//             <Pressable onPress={() => router.push("/(home)/attendance-report")} style={styles.reportCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="file-document" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>Attendance Report</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//             <Pressable onPress={() => router.push("/(home)/summary")} style={styles.reportCard}>
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name="file-document-outline" size={24} color="black" />
//               </View>
//               <Text style={styles.reportText}>Summary Report</Text>
//               <View style={styles.chevronContainer}>
//                 <Entypo name="chevron-right" size={24} color="black" />
//               </View>
//             </Pressable>
//           </View>
//         </View>
//       </LinearGradient>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   headerText: {
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   section: {
//     marginTop: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 20,
//   },
//   card: {
//     backgroundColor: "#D3CCE3",
//     padding: 12,
//     borderRadius: 6,
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   cardText: {
//     marginTop: 7,
//     fontWeight: "600",
//   },
//   reportContainer: {
//     marginTop: 20,
//     backgroundColor: "white",
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     borderRadius: 7,
//   },
//   reportCard: {
//     backgroundColor: "#BE93C5",
//     borderRadius: 6,
//     padding: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   reportText: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontWeight: "600",
//     flex: 1,
//   },
//   chevronContainer: {
//     width: 35,
//     height: 35,
//     borderRadius: 7,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default Index;





// app/(home)/index.js
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Entypo, MaterialCommunityIcons } from "@expo/vector-icons"; // Removed Ionicons and Octicons
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Employee Management System
            </Text>
            <Pressable onPress={() => router.push("(auth)/login")}>
              <MaterialCommunityIcons name="logout" size={24} color="black" />
            </Pressable>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Pressable
              onPress={() => router.push("/(home)/employees")}
              style={styles.card}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="account-group"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={styles.cardText}>Employee List</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(home)/markattendance")}
              style={styles.card}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="check-circle"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={styles.cardText}>Mark Attendance</Text>
            </Pressable>
          </View>

          <View style={styles.reportContainer}>
            <Pressable
              onPress={() => router.push("/(home)/attendance-report")}
              style={styles.reportCard}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="file-document"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={styles.reportText}>Attendance Report</Text>
              <View style={styles.chevronContainer}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>

            <Pressable
              onPress={() => router.push("/(home)/summary")}
              style={styles.reportCard}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="file-document-outline"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={styles.reportText}>Summary Report</Text>
              <View style={styles.chevronContainer}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>

            <Pressable
              onPress={() => router.push("/(home)/allGenerateReports")}
              style={styles.reportCard}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="file-chart" size={24} color="black" />
              </View>
              <Text style={styles.reportText}>All Generate Reports</Text>
              <View style={styles.chevronContainer}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>

            <Pressable
              onPress={() => router.push("/(home)/overtimeEmployees")}
              style={styles.reportCard}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="account-clock" size={24} color="black" />
              </View>
              <Text style={styles.reportText}>Overtime Employees</Text>
              <View style={styles.chevronContainer}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>

          <View style={styles.criteriaContainer}>
            <Pressable 
              onPress={() => router.push("/(home)/attendanceCriteria")}  // Add this route
              style={styles.criteriaCard}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
              </View>
              <Text style={styles.criteriaText}>Attendance Criteria</Text>
            </Pressable>

            <Pressable 
              onPress={() => router.push("/(home)/increasedWorkflow")}  // Add this route
              style={styles.criteriaCard}
            >
              <View style={styles.iconContainer}>
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text style={styles.criteriaText}>Increased Workflow</Text>
            </Pressable>
          </View>

          <View style={styles.criteriaContainer}>
            <Pressable 
              onPress={() => router.push("/(home)/costSavings")}  // Add this route
              style={styles.criteriaCard}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
              </View>
              <Text style={styles.criteriaText}>Cost Savings</Text>
            </Pressable>

            <Pressable 
              onPress={() => router.push("/(home)/employeePerformance")}  // Add this route
              style={styles.criteriaCard}
            >
              <View style={styles.iconContainer}>
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text style={styles.criteriaText}>Employee Performance</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#D3CCE3",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  cardText: {
    marginTop: 7,
    fontWeight: "600",
  },
  reportContainer: {
    marginTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
  },
  reportCard: {
    backgroundColor: "#BE93C5",
    borderRadius: 6,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  reportText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  chevronContainer: {
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  criteriaContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  criteriaCard: {
    backgroundColor: "#f79d00",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  criteriaText: {
    marginTop: 7,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default index;
