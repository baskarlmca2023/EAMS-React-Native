// import React from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import { useRouter } from 'expo-router';
// import { loginValidationSchema } from '../../schemas/validationSchema';

// export default function Login() {
//   const router = useRouter();

//   return (
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validationSchema={loginValidationSchema}
//       onSubmit={(values) => {
//         // Handle successful login logic here
//         router.push('/home/index'); // Redirect to Employee Management page after login
//       }}
//     >
//       {({ handleChange, handleSubmit, values, errors, touched }) => (
//         <View style={styles.container}>
//           <Text style={styles.title}>Login</Text>
//           <TextInput
//             placeholder="Email"
//             value={values.email}
//             onChangeText={handleChange('email')}
//             style={styles.input}
//           />
//           {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

//           <TextInput
//             placeholder="Password"
//             secureTextEntry
//             value={values.password}
//             onChangeText={handleChange('password')}
//             style={styles.input}
//           />
//           {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

//           <Button title="Login" onPress={handleSubmit} />
//         </View>
//       )}
//     </Formik>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   error: {
//     color: 'red',
//   },
// });

// // app/(auth)/login.js
// import React, { useState } from "react";
// import { View, TextInput, Pressable, Text, StyleSheet, Alert } from "react-native";
// import { useRouter } from "expo-router";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = async () => {
//     if (!username || !password) {
//       Alert.alert("Error", "Please enter both username and password.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // On success, navigate to home
//         Alert.alert("Success", data.message);
//         router.push("/(home)");
//       } else {
//         Alert.alert("Error", data.message);
//       }
//     } catch (error) {
//       console.error("Login failed", error);
//       Alert.alert("Error", "Login failed. Please try again later.");
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
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//       />
//       <Pressable onPress={handleLogin} style={styles.button}>
//         <Text style={styles.buttonText}>Login</Text>
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

// export default Login;



//baskar
// // app/(auth)/login.js
// import React, { useState } from "react";
// import { View, TextInput, Pressable, Text, StyleSheet, Image, Alert } from "react-native";
// import { useRouter } from "expo-router";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = async () => {
//     if (!username || !password) {
//       Alert.alert("Error", "Please enter both username and password.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         Alert.alert("Success", "Login successful!");
//         router.push("/(home)");
//       } else {
//         Alert.alert("Error", "Wrong username or password.");
//       }
//     } catch (error) {
//       console.error("Login failed", error);
//       Alert.alert("Error", "Login failed. Please try again later.");
//     }
//   };

//   return (
//     <View style={styles.pageContainer}>
//       <View style={styles.container}>
//         <Text style={styles.eamsText}>EAMS</Text> {/* EAMS text added */}
//         <Text style={styles.loginText}>Login</Text>
//         <Image
//           source={require('../assets/user.png')} // Replace with your logo image path
//           style={styles.logo}
//         />
//         <TextInput
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           style={styles.input}
//         />
//         <Pressable onPress={handleLogin} style={styles.button}>
//           <Text style={styles.buttonText}>Login</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   pageContainer: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#f0f0f0", // Lighter background for the page
//   },
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#fff", // White background for the container box
//     maxWidth: 400, // Smaller container width
//     alignSelf: "center",
//     borderRadius: 10, // Rounded corners for the container
//     paddingVertical: 40,
//     shadowColor: "#000", // Add shadow for depth
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 10, // Higher elevation for a more pronounced shadow
//   },
//   eamsText: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#7F7FD5", // Professional purple color for EAMS text
//   },
//   loginText: {
//     fontSize: 22,
//     fontWeight: "600",
//     marginBottom: 20,
//     color: "#333", // Darker color for the login text
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     marginBottom: 20, // Space between logo and input fields
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     backgroundColor: "#f9f9f9", // Slightly off-white input background
//   },
//   button: {
//     backgroundColor: "#7F7FD5", // Purple button color
//     paddingVertical: 15,
//     borderRadius: 8,
//     width: '100%',
//     alignItems: "center",
//     shadowColor: "#000", // Add shadow for the button
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },
// });

// export default Login;









//baskar
// // app/(auth)/login.js
// import React, { useState } from "react";
// import { View, TextInput, Pressable, Text, StyleSheet, Image, Alert } from "react-native";
// import { useRouter } from "expo-router";
// import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons for the back arrow

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = async () => {
//     if (!username || !password) {
//       Alert.alert("Error", "Please enter both username and password.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         Alert.alert("Success", "Login successful!");
//         router.push("/(home)");
//       } else {
//         Alert.alert("Error", "Wrong username or password.");
//       }
//     } catch (error) {
//       console.error("Login failed", error);
//       Alert.alert("Error", "Login failed. Please try again later.");
//     }
//   };

//   return (
//     <View style={styles.pageContainer}>
//       <Pressable onPress={() => router.push("/WelcomePage")} style={styles.backButton}>
//         <Ionicons name="arrow-back" size={24} color="#333" />
//       </Pressable>
//       <View style={styles.container}>
//         <Text style={styles.eamsText}>EAMS</Text> {/* EAMS text added */}
//         <Text style={styles.loginText}>Login</Text>
//         <Image
//           source={require('../assets/user.png')} // Replace with your logo image path
//           style={styles.logo}
//         />
//         <TextInput
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           style={styles.input}
//         />
//         <Pressable onPress={handleLogin} style={styles.button}>
//           <Text style={styles.buttonText}>Login</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   pageContainer: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#f0f0f0", // Lighter background for the page
//   },
//   backButton: {
//     position: "absolute",
//     top: 40, // Adjust top position as necessary
//     left: 20, // Adjust left position as necessary
//   },
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#fff", // White background for the container box
//     maxWidth: 400, // Smaller container width
//     alignSelf: "center",
//     borderRadius: 10, // Rounded corners for the container
//     paddingVertical: 40,
//     shadowColor: "#000", // Add shadow for depth
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 10, // Higher elevation for a more pronounced shadow
//   },
//   eamsText: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#7F7FD5", // Professional purple color for EAMS text
//   },
//   loginText: {
//     fontSize: 22,
//     fontWeight: "600",
//     marginBottom: 20,
//     color: "#333", // Darker color for the login text
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     marginBottom: 20, // Space between logo and input fields
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     backgroundColor: "#f9f9f9", // Slightly off-white input background
//   },
//   button: {
//     backgroundColor: "#7F7FD5", // Purple button color
//     paddingVertical: 15,
//     borderRadius: 8,
//     width: '100%',
//     alignItems: "center",
//     shadowColor: "#000", // Add shadow for the button
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },
// });

// export default Login;





// //baskar
// // app/(auth)/login.js
// import React, { useState } from "react";
// import { View, TextInput, Pressable, Text, StyleSheet, Image, Alert } from "react-native";
// import { useRouter } from "expo-router";
// import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons for the back arrow

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = async () => {
//     if (!username || !password) {
//       Alert.alert("Error", "Please enter both username and password.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         Alert.alert("Success", "Login successful!");
//         router.push("/(home)");
//       } else {
//         Alert.alert("Error", "Wrong username or password.");
//       }
//     } catch (error) {
//       console.error("Login failed", error);
//       Alert.alert("Error", "Login failed. Please try again later.");
//     }
//   };

//   return (
//     <View style={styles.pageContainer}>
//       <View style={styles.container}>
//         <Pressable onPress={() => router.push("/WelcomePage")} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </Pressable>
//         <Text style={styles.eamsText}>EAMS</Text> {/* EAMS text added */}
//         <Text style={styles.loginText}>Login</Text>
//         <Image
//           source={require('../assets/user.png')} // Replace with your logo image path
//           style={styles.logo}
//         />
//         <TextInput
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           style={styles.input}
//         />
//         <Pressable onPress={handleLogin} style={styles.button}>
//           <Text style={styles.buttonText}>Login</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   pageContainer: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#f0f0f0", // Lighter background for the page
//   },
//   backButton: {
//     marginBottom: 20, // Space above the back button
//     alignSelf: 'flex-start', // Aligns the button to the left within the container
//   },
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#fff", // White background for the container box
//     maxWidth: 400, // Smaller container width
//     alignSelf: "center",
//     borderRadius: 10, // Rounded corners for the container
//     paddingVertical: 40,
//     shadowColor: "#000", // Add shadow for depth
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 10, // Higher elevation for a more pronounced shadow
//   },
//   eamsText: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#7F7FD5", // Professional purple color for EAMS text
//   },
//   loginText: {
//     fontSize: 22,
//     fontWeight: "600",
//     marginBottom: 20,
//     color: "#333", // Darker color for the login text
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     marginBottom: 20, // Space between logo and input fields
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     backgroundColor: "#f9f9f9", // Slightly off-white input background
//   },
//   button: {
//     backgroundColor: "#7F7FD5", // Purple button color
//     paddingVertical: 15,
//     borderRadius: 8,
//     width: '100%',
//     alignItems: "center",
//     shadowColor: "#000", // Add shadow for the button
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },
// });

// export default Login;










import React, { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet, Image, Alert } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons for the back arrow
import AsyncStorage from "@react-native-async-storage/async-storage"; // For storing the role locally

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter both username and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save role in AsyncStorage and redirect based on role
        await AsyncStorage.setItem("userRole", data.role);

        Alert.alert("Success", "Login successful!");
        if (data.role === "admin") {
          router.push("/(admin)/dashboard"); // Redirect to admin dashboard
        } else {
          router.push("/(home)"); // Redirect to home page
        }
      } else {
        Alert.alert("Error", "Wrong username or password.");
      }
    } catch (error) {
      console.error("Login failed", error);
      Alert.alert("Error", "Login failed. Please try again later.");
    }
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <Pressable onPress={() => router.push("/WelcomePage")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </Pressable>
        <Text style={styles.eamsText}>EAMS</Text> {/* EAMS text added */}
        <Text style={styles.loginText}>Login</Text>
        <Image
          source={require('../assets/user.png')} // Replace with your logo image path
          style={styles.logo}
        />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Pressable onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // styles remain the same as the original code
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f0f0f0", // Lighter background for the page
  },
  backButton: {
    marginBottom: 20, // Space above the back button
    alignSelf: 'flex-start', // Aligns the button to the left within the container
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff", // White background for the container box
    maxWidth: 400, // Smaller container width
    alignSelf: "center",
    borderRadius: 10, // Rounded corners for the container
    paddingVertical: 40,
    shadowColor: "#000", // Add shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10, // Higher elevation for a more pronounced shadow
  },
  eamsText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#7F7FD5", // Professional purple color for EAMS text
  },
  loginText: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    color: "#333", // Darker color for the login text
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20, // Space between logo and input fields
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9", // Slightly off-white input background
  },
  button: {
    backgroundColor: "#7F7FD5", // Purple button color
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: "center",
    shadowColor: "#000", // Add shadow for the button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Login;







