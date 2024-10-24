// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TextInput,
//   Pressable,
//   Alert,
// } from "react-native";
// import React, { useState } from "react";
// import axios from "axios";

// const adddetails = () => {
//   const [name, setName] = useState("");
//   const [employeeId, setEmployeeId] = useState("");
//   const [dob, setDob] = useState("");
//   const [mobileNo, setMobileNo] = useState("");
//   const [joiningDate, setJoiningDate] = useState("");
//   const [salary, setSalary] = useState("");
//   const [address, setAddress] = useState("");
//   const [designation, setDesignation] = useState("");
//   const handleRegister = () => {
//     const employeeData = {
//       employeeName: name,
//       employeeId: employeeId,
//       designation: designation,
//       phoneNumber: mobileNo,
//       dateOfBirth: dob,
//       joiningDate: joiningDate,
//       activeEmployee: true,
//       salary: salary,
//       address: address,
//     };

//     axios
//       .post("http://localhost:8000/addEmployee", employeeData)
//       .then((response) => {
//         Alert.alert(
//           "Registration Successful",
//           "You have been registered successfully"
//         );
//         setName("");
//         setEmployeeId("");
//         setDob("");
//         setMobileNo("");
//         setSalary("");
//         setAddress("");
//         setJoiningDate("");
//         setDesignation("");
//       })
//       .catch((error) => {
//         Alert.alert(
//           "Registration Fail",
//           "An error occurred during registration"
//         );
//         console.log("register failed", error);
//       });
//   };
//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
//       <View style={{ padding: 10 }}>
//         <Text style={{ fontSize: 17, fontWeight: "bold" }}>
//           Add a New Employee
//         </Text>

//         <TextInput
//           style={{
//             padding: 10,
//             borderColor: "#D0D0D0",
//             borderWidth: 1,
//             marginTop: 10,
//             borderRadius: 5,
//           }}
//           placeholder="India"
//           placeholderTextColor={"black"}
//         />

//         <View style={{ marginVertical: 10 }}>
//           <Text style={{ fontSize: 17, fontWeight: "bold" }}>
//             Full Name (First and last Name)
//           </Text>
//           <TextInput
//             value={name}
//             onChangeText={(text) => setName(text)}
//             style={{
//               padding: 10,
//               borderColor: "#D0D0D0",
//               borderWidth: 1,
//               marginTop: 10,
//               borderRadius: 5,
//             }}
//             placeholder="enter your name"
//             placeholderTextColor={"black"}
//           />
//         </View>

//         <View>
//           <Text style={{ fontSize: 17, fontWeight: "bold" }}>Employee Id</Text>
//           <TextInput
//             value={employeeId}
//             onChangeText={(text) => setEmployeeId(text)}
//             style={{
//               padding: 10,
//               borderColor: "#D0D0D0",
//               borderWidth: 1,
//               marginTop: 10,
//               borderRadius: 5,
//             }}
//             placeholder="Employee Id"
//             placeholderTextColor={"black"}
//           />
//         </View>

//         <View style={{ marginVertical: 10 }}>
//           <Text style={{ fontSize: 17, fontWeight: "bold" }}>Designation</Text>
//           <TextInput
//             value={designation}
//             onChangeText={(text) => setDesignation(text)}
//             style={{
//               padding: 10,
//               borderColor: "#D0D0D0",
//               borderWidth: 1,
//               marginTop: 10,
//               borderRadius: 5,
//             }}
//             placeholder="Designation"
//             placeholderTextColor={"black"}
//           />
//         </View>

//         <View>
//           <Text style={{ fontSize: 17, fontWeight: "bold" }}>
//             Mobile Number
//           </Text>
//           <TextInput
//             value={mobileNo}
//             onChangeText={(text) => setMobileNo(text)}
//             style={{
//               padding: 10,
//               borderColor: "#D0D0D0",
//               borderWidth: 1,
//               marginTop: 10,
//               borderRadius: 5,
//             }}
//             placeholder="Mobile No"
//             placeholderTextColor={"black"}
//           />
//         </View>

//         <View style={{ marginVertical: 10 }}>
//           <Text style={{ fontSize: 17, fontWeight: "bold" }}>
//             Date of Birth
//           </Text>
//           <TextInput
//             value={dob}
//             onChangeText={(text) => setDob(text)}
//             style={{
//               padding: 10,
//               borderColor: "#D0D0D0",
//               borderWidth: 1,
//               marginTop: 10,
//               borderRadius: 5,
//             }}
//             placeholder="Enter Date of Birth"
//             placeholderTextColor={"black"}
//           />
//         </View>

//         <View>
//           <Text style={{ fontSize: 17, fontWeight: "bold" }}>Joining Date</Text>
//           <TextInput
//             value={joiningDate}
//             onChangeText={(text) => setJoiningDate(text)}
//             style={{
//               padding: 10,
//               borderColor: "#D0D0D0",
//               borderWidth: 1,
//               marginTop: 10,
//               borderRadius: 5,
//             }}
//             placeholder="Joining Date"
//             placeholderTextColor={"black"}
//           />
//         </View>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             marginTop: 10,
//           }}
//         >
//           <Text>Active Employee</Text>
//           <Text>True</Text>
//         </View>
//         <View style={{ marginVertical: 10 }}>
//           <Text style={{ fontSize: 17, fontWeight: "bold" }}>Salary</Text>
//           <TextInput
//             value={salary}
//             onChangeText={(text) => setSalary(text)}
//             style={{
//               padding: 10,
//               borderColor: "#D0D0D0",
//               borderWidth: 1,
//               marginTop: 10,
//               borderRadius: 5,
//             }}
//             placeholder="Enter Salary"
//             placeholderTextColor={"black"}
//           />
//         </View>

//         <View>
//           <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
//           <TextInput
//             value={address}
//             onChangeText={(text) => setAddress(text)}
//             style={{
//               padding: 10,
//               borderColor: "#D0D0D0",
//               borderWidth: 1,
//               marginTop: 10,
//               borderRadius: 5,
//             }}
//             placeholder="Enter Address"
//             placeholderTextColor={"black"}
//           />
//         </View>

//         <Pressable
//           onPress={handleRegister}
//           style={{
//             backgroundColor: "#ABCABA",
//             padding: 10,
//             marginTop: 20,
//             justifyContent: "center",
//             alignItems: "center",
//             borderRadius: 5,
//           }}
//         >
//           <Text style={{ fontWeight: "bold", color: "white" }}>
//             Add Employee
//           </Text>
//         </Pressable>
//       </View>
//     </ScrollView>
//   );
// };

// export default adddetails;

// const styles = StyleSheet.create({});





import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
  TouchableOpacity, // For the back button
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome"; // Import Font Awesome icons
import { useNavigation } from '@react-navigation/native'; // For navigation

const AddDetails = () => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");

  const navigation = useNavigation(); // Access to navigation

  const handleRegister = () => {
    const employeeData = {
      employeeName: name,
      employeeId: employeeId,
      designation: designation,
      phoneNumber: mobileNo,
      dateOfBirth: dob,
      joiningDate: joiningDate,
      activeEmployee: true,
      salary: salary,
      address: address,
    };

    axios
      .post("http://localhost:8000/addEmployee", employeeData)
      .then((response) => {
        Alert.alert(
          "Registration Successful",
          "You have been registered successfully"
        );
        setName("");
        setEmployeeId("");
        setDob("");
        setMobileNo("");
        setSalary("");
        setAddress("");
        setJoiningDate("");
        setDesignation("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Fail",
          "An error occurred during registration"
        );
        console.log("register failed", error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Back Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={25} color="#7F7FD5" /> {/* Purple back icon */}
        </TouchableOpacity>
        <Text style={styles.headerText}>Add a New Employee</Text>
      </View>

      <View style={styles.formContainer}>
        {/* Full Name */}
        <Text style={styles.label}>
          <Icon name="user" size={20} color="#7F7FD5" /> Full Name (First and Last Name)
        </Text>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor={"#7F7FD5"} // Light purple placeholder color
        />

        {/* Employee ID */}
        <Text style={styles.label}>
          <Icon name="id-badge" size={20} color="#7F7FD5" /> Employee ID
        </Text>
        <TextInput
          value={employeeId}
          onChangeText={(text) => setEmployeeId(text)}
          style={styles.input}
          placeholder="Employee ID"
          placeholderTextColor={"#7F7FD5"}
        />

        {/* Designation */}
        <Text style={styles.label}>
          <Icon name="briefcase" size={20} color="#7F7FD5" /> Designation
        </Text>
        <TextInput
          value={designation}
          onChangeText={(text) => setDesignation(text)}
          style={styles.input}
          placeholder="Designation"
          placeholderTextColor={"#7F7FD5"}
        />

        {/* Mobile Number */}
        <Text style={styles.label}>
          <Icon name="phone" size={20} color="#7F7FD5" /> Mobile Number
        </Text>
        <TextInput
          value={mobileNo}
          onChangeText={(text) => setMobileNo(text)}
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor={"#7F7FD5"}
        />

        {/* Date of Birth */}
        <Text style={styles.label}>
          <Icon name="calendar" size={20} color="#7F7FD5" /> Date of Birth
        </Text>
        <TextInput
          value={dob}
          onChangeText={(text) => setDob(text)}
          style={styles.input}
          placeholder="Enter Date of Birth"
          placeholderTextColor={"#7F7FD5"}
        />

        {/* Joining Date */}
        <Text style={styles.label}>
          <Icon name="calendar-check-o" size={20} color="#7F7FD5" /> Joining Date
        </Text>
        <TextInput
          value={joiningDate}
          onChangeText={(text) => setJoiningDate(text)}
          style={styles.input}
          placeholder="Joining Date"
          placeholderTextColor={"#7F7FD5"}
        />

        {/* Salary */}
        <Text style={styles.label}>
          <Icon name="money" size={20} color="#7F7FD5" /> Salary
        </Text>
        <TextInput
          value={salary}
          onChangeText={(text) => setSalary(text)}
          style={styles.input}
          placeholder="Enter Salary"
          placeholderTextColor={"#7F7FD5"}
        />

        {/* Address */}
        <Text style={styles.label}>
          <Icon name="home" size={20} color="#7F7FD5" /> Address
        </Text>
        <TextInput
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
          placeholder="Enter Address"
          placeholderTextColor={"#7F7FD5"}
        />

        {/* Add Employee Button */}
        <Pressable onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>
            <Icon name="save" size={20} color="#FFF" /> Add Employee
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f5f5f5", // Light background for the header
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7F7FD5", // Purple color for the header text
    marginLeft: 15, // Space after the back icon
  },
  formContainer: {
    padding: 20,
  },
  label: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
    color: "#7F7FD5", // Purple color for the labels
  },
  input: {
    padding: 10,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9", // Slightly gray background for inputs
    color: "#000", // Black text color
  },
  button: {
    backgroundColor: "#7F7FD5", // Purple background for the button
    padding: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white", // White text for the button
    fontSize: 18,
  },
});
