// // app/(auth)/register.js
// import React, { useState } from "react";
// import { View, TextInput, Pressable, Text, StyleSheet, Alert } from "react-native";
// import { useRouter } from "expo-router";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleRegister = async () => {
//     if (!username || !email || !password) {
//       Alert.alert("Error", "Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         Alert.alert("Success", data.message);
//         router.push("/(auth)/login");
//       } else {
//         Alert.alert("Error", data.message);
//       }
//     } catch (error) {
//       console.error("Registration failed", error);
//       Alert.alert("Error", "Registration failed. Please try again later.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//       />
//       <Pressable onPress={handleRegister} style={styles.button}>
//         <Text style={styles.buttonText}>Register</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//   },
//   input: {
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: "#7F7FD5",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 18,
//   },
// });

// export default Register;





//baskar
// // app/(auth)/register.js
// import React, { useState } from "react";
// import { View, TextInput, Pressable, Text, StyleSheet, Image, Alert } from "react-native";
// import { useRouter } from "expo-router";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleRegister = async () => {
//     if (!username || !email || !password) {
//       Alert.alert("Error", "Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         Alert.alert("Success", data.message);
//         router.push("/(auth)/login");
//       } else {
//         Alert.alert("Error", data.message);
//       }
//     } catch (error) {
//       console.error("Registration failed", error);
//       Alert.alert("Error", "Registration failed. Please try again later.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.eamsText}>EAMS</Text> {/* Moved EAMS text inside the card */}
//         <Text style={styles.title}>Sign Up</Text>

//         <Image
//           source={require('../assets/signup.png')} // Replace with your logo image path
//           style={styles.logo} // Logo at the bottom
//         />

//         <TextInput
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           style={styles.input}
//         />
//         <Pressable onPress={handleRegister} style={styles.button}>
//           <Text style={styles.buttonText}>Register</Text>
//         </Pressable>
       
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5", // Light background for clean look
//     padding: 20,
//   },
//   card: {
//     width: '85%', // Smaller container for a more focused design
//     backgroundColor: "#fff", // White card background
//     padding: 20,
//     borderRadius: 15, // Rounded corners for card
//     shadowColor: "#000", // Shadow for depth
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.25,
//     shadowRadius: 6,
//     elevation: 8, // Elevation for Android devices
//     alignItems: "center", // Center content inside the card
//   },
//   eamsText: {
//     fontSize: 26, // Slightly smaller for better layout
//     fontWeight: "bold",
//     color: "#7F7FD5", // Purple color for "EAMS" text
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   title: {
//     fontSize: 22, // Consistent size with the overall design
//     fontWeight: "bold",
//     marginBottom: 15,
//     color: "#333", // Darker color for the title
//   },
//   input: {
//     width: '100%', // Full width within the card
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     backgroundColor: "#fff", // White background for input fields
//   },
//   button: {
//     backgroundColor: "#7F7FD5", // Professional purple color
//     paddingVertical: 15,
//     borderRadius: 8,
//     width: '100%', // Full width button inside the card
//     alignItems: "center",
//     shadowColor: "#000", // Shadow for button
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3.84,
//     elevation: 5, // Elevation for Android devices
//     marginBottom: 20, // Space between button and logo
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   logo: {
//     width: 70, // Slightly smaller logo for balance
//     height: 70,
//   },
// });

// export default Register;






// //baskar
// // app/(auth)/register.js
// import React, { useState } from "react";
// import { View, TextInput, Pressable, Text, StyleSheet, Image, Alert } from "react-native";
// import { useRouter } from "expo-router";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleRegister = async () => {
//     if (!username || !email || !password) {
//       Alert.alert("Error", "Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         Alert.alert("Success", data.message);
//         router.push("/(auth)/login");
//       } else {
//         Alert.alert("Error", data.message);
//       }
//     } catch (error) {
//       console.error("Registration failed", error);
//       Alert.alert("Error", "Registration failed. Please try again later.");
//     }
//   };

//   const handleBack = () => {
//     router.push("/WelcomePage"); // Navigate to welcome page
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Pressable onPress={handleBack} style={styles.backButton}>
//           <Text style={styles.backButtonText}>← Back</Text>
//         </Pressable>
//         <Text style={styles.eamsText}>EAMS</Text> {/* Moved EAMS text inside the card */}
//         <Text style={styles.title}>Sign Up</Text>
        
//         <Image
//           source={require('../assets/signup.png')} // Replace with your logo image path
//           style={styles.logo} // Logo at the bottom
//         />

//         <TextInput
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           style={styles.input}
//         />
//         <Pressable onPress={handleRegister} style={styles.button}>
//           <Text style={styles.buttonText}>Register</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5", // Light background for clean look
//     padding: 20,
//   },
//   card: {
//     width: '85%', // Smaller container for a more focused design
//     backgroundColor: "#fff", // White card background
//     padding: 20,
//     borderRadius: 15, // Rounded corners for card
//     shadowColor: "#000", // Shadow for depth
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.25,
//     shadowRadius: 6,
//     elevation: 8, // Elevation for Android devices
//     alignItems: "center", // Center content inside the card
//   },
//   backButton: {
//     alignSelf: 'flex-start', // Align to the left
//     marginBottom: 15, // Space between back button and EAMS text
//   },
//   backButtonText: {
//     fontSize: 16,
//     color: "#7F7FD5", // Purple color for back button
//   },
//   eamsText: {
//     fontSize: 26, // Slightly smaller for better layout
//     fontWeight: "bold",
//     color: "#7F7FD5", // Purple color for "EAMS" text
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   title: {
//     fontSize: 22, // Consistent size with the overall design
//     fontWeight: "bold",
//     marginBottom: 15,
//     color: "#333", // Darker color for the title
//   },
//   input: {
//     width: '100%', // Full width within the card
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     backgroundColor: "#fff", // White background for input fields
//   },
//   button: {
//     backgroundColor: "#7F7FD5", // Professional purple color
//     paddingVertical: 15,
//     borderRadius: 8,
//     width: '100%', // Full width button inside the card
//     alignItems: "center",
//     shadowColor: "#000", // Shadow for button
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3.84,
//     elevation: 5, // Elevation for Android devices
//     marginBottom: 20, // Space between button and logo
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   logo: {
//     width: 70, // Slightly smaller logo for balance
//     height: 70,
//   },
// });

// export default Register;





// app/(auth)/register.js
import React, { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet, Image, Alert } from "react-native";
import { useRouter } from "expo-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", data.message);
        router.push("/(auth)/login");
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      console.error("Registration failed", error);
      Alert.alert("Error", "Registration failed. Please try again later.");
    }
  };

  const handleBack = () => {
    router.push("/WelcomePage"); // Navigate to welcome page
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Pressable onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>
        <Text style={styles.eamsText}>EAMS</Text> {/* Moved EAMS text inside the card */}
        <Text style={styles.title}>Sign Up</Text>

        <Image
          source={require('../assets/signup.png')} // Replace with your logo image path
          style={styles.logo} // Logo at the bottom
        />

        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Pressable onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light background for clean look
    padding: 10, // Reduced padding for a tighter layout
  },
  card: {
    width: '75%', // Reduced card width for a more compact look
    backgroundColor: "#fff", // White card background
    padding: 15, // Reduced padding for a more compact design
    borderRadius: 10, // Reduced border radius for a sleeker look
    shadowColor: "#000", // Shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8, // Elevation for Android devices
    alignItems: "center", // Center content inside the card
  },
  backButton: {
    alignSelf: 'flex-start', // Align to the left
    marginBottom: 10, // Reduced space between back button and EAMS text
  },
  backButtonText: {
    fontSize: 16,
    color: "#7F7FD5", // Purple color for back button
  },
  eamsText: {
    fontSize: 24, // Reduced size for better layout
    fontWeight: "bold",
    color: "#7F7FD5", // Purple color for "EAMS" text
    marginBottom: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 20, // Slightly smaller title
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Darker color for the title
  },
  input: {
    width: '100%', // Full width within the card
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10, // Reduced margin for more compact layout
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff", // White background for input fields
  },
  button: {
    backgroundColor: "#7F7FD5", // Professional purple color
    paddingVertical: 12, // Reduced padding for a more compact button
    borderRadius: 8,
    width: '100%', // Full width button inside the card
    alignItems: "center",
    shadowColor: "#000", // Shadow for button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5, // Elevation for Android devices
    marginBottom: 15, // Reduced margin between button and logo
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16, // Slightly smaller button text
    fontWeight: "600",
  },
  logo: {
    width: 60, // Slightly smaller logo for balance
    height: 60,
  },
});

export default Register;
