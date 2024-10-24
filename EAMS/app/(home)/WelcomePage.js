// // app/(home)/WelcomePage.js
// import React from "react";
// import { View, Text, Pressable, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";

// const WelcomePage = () => {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to Employee Management</Text>
//       <Pressable onPress={() => router.push("/(auth)/login")} style={styles.button}>
//         <Text style={styles.buttonText}>Login</Text>
//       </Pressable>
//       <Pressable onPress={() => router.push("/(auth)/register")} style={styles.button}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: "#7F7FD5",
//     padding: 15,
//     borderRadius: 8,
//     marginVertical: 10,
//     width: '80%',
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },
// });

// export default WelcomePage;









// // app/(home)/WelcomePage.js
// import React from "react";
// import { View, Text, Pressable, StyleSheet, Image, ImageBackground } from "react-native";
// import { useRouter } from "expo-router";

// const WelcomePage = () => {
//   const router = useRouter();

//   return (
//     <ImageBackground
//       source={require('../assets/welcome.png')} // Replace with your background image path
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <View style={styles.container}>
//         <Image
//           source={require('../assets/employee.png')} // Replace with your logo image path
//           style={styles.logo}
//         />
//         <Text style={styles.title}>Welcome to Employee  Management</Text>
//         <Pressable onPress={() => router.push("/(auth)/login")} style={styles.button}>
//           <Text style={styles.buttonText}>Login</Text>
//         </Pressable>
//         <Pressable onPress={() => router.push("/(auth)/register")} style={styles.button}>
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </Pressable>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for better text readability
//     borderRadius: 10,
//   },
//   logo: {
//     width: 100, // Adjust the width as needed
//     height: 100, // Adjust the height as needed
//     marginBottom: 20, // Space between logo and title
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#333", // Darker text color for contrast
//     textAlign: "center", // Center align text
//   },
//   button: {
//     backgroundColor: "#7F7FD5",
//     padding: 15,
//     borderRadius: 8,
//     marginVertical: 10,
//     width: '80%',
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },
// });

// export default WelcomePage;



// //baskar
// // app/(home)/WelcomePage.js
// import React from "react";
// import { View, Text, Pressable, StyleSheet, Image } from "react-native";
// import { useRouter } from "expo-router";

// const WelcomePage = () => {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <View style={styles.contentBox}>
//         <Image
//           source={require('../assets/employee.png')} // Replace with your logo image path
//           style={styles.logo}
//         />
//         <Text style={styles.title}>Welcome to Employee Attendance Management System (EAMS)</Text>
//         <Pressable onPress={() => router.push("/(auth)/login")} style={styles.button}>
//           <Text style={styles.buttonText}>Login</Text>
//         </Pressable>
//         <Pressable onPress={() => router.push("/(auth)/register")} style={styles.button}>
//           <Text style={styles.buttonText}>Sign Up</Text>
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
//     backgroundColor: '#f0f0f0', // Slightly darker background for a professional feel
//     padding: 20,
//   },
//   contentBox: {
//     backgroundColor: '#fff', // Light background for the box
//     padding: 20, // Slightly less padding to make the box smaller
//     borderRadius: 15, // Rounded corners for the box
//     shadowColor: "#000", // Shadow for the box
//     shadowOffset: { width: 0, height: 2 }, // Reduced shadow size for a lighter effect
//     shadowOpacity: 0.2,
//     shadowRadius: 3, // Reduced shadow radius for a softer look
//     elevation: 5,
//     alignItems: "center",
//     width: '80%', // Make the box smaller (80% of the screen width)
//     maxWidth: 350, // Ensure the box doesn't get too large on bigger screens
//   },
//   logo: {
//     width: 100, // Slightly smaller for better visual balance
//     height: 100,
//     marginBottom: 20, // Space between logo and title
//   },
//   title: {
//     fontSize: 22, // Slightly smaller font size for the title
//     fontWeight: "700", // Bold text for a professional look
//     marginBottom: 20, // Space between title and buttons
//     color: "#333", // Darker text color for contrast
//     textAlign: "center", // Center align text
//   },
//   button: {
//     backgroundColor: "#7F7FD5", // Purple button color
//     paddingVertical: 12, // Slightly less padding for a compact design
//     paddingHorizontal: 30, // Adjusted padding for smaller buttons
//     borderRadius: 8, // Softer button corners
//     marginVertical: 10, // Space between buttons for cleaner look
//     width: '100%', // Buttons take full width of the box
//     alignItems: "center",
//     shadowColor: "#000", // Subtle shadow effect
//     shadowOffset: { width: 0, height: 3 }, // Reduced shadow size for buttons
//     shadowOpacity: 0.2, // Lower shadow opacity
//     shadowRadius: 4, // Slightly reduced shadow radius for buttons
//     elevation: 5, // Slightly lower elevation for less shadow
//   },
//   buttonText: {
//     color: "#FFF", // White text for contrast
//     fontSize: 16, // Slightly smaller text size for buttons
//     fontWeight: "600",
//   },
// });

// export default WelcomePage;







// import React from "react";
// import { View, Text, Pressable, StyleSheet, Image } from "react-native";
// import { useRouter } from "expo-router";

// const WelcomePage = () => {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <View style={styles.contentBox}>
//         <Image
//           source={require('../assets/employee.png')} // Replace with your logo image path
//           style={styles.logo}
//         />
//         <Text style={styles.title}>Welcome to Employee Attendance Management System (EAMS)</Text>

//         {/* User Module */}
//         <Text style={styles.moduleTitle}>User</Text>
//         <Pressable onPress={() => router.push("/(auth)/login")} style={styles.button}>
//           <Text style={styles.buttonText}>User Login</Text>
//         </Pressable>
//         <Pressable onPress={() => router.push("/(auth)/register")} style={styles.button}>
//           <Text style={styles.buttonText}>User Sign Up</Text>
//         </Pressable>

//         {/* Admin Module */}
//         <Text style={styles.moduleTitle}>Admin</Text>
//         <Pressable onPress={() => router.push("/(admin)/login")} style={[styles.button, styles.adminButton]}>
//           <Text style={styles.buttonText}>Admin Login</Text>
//         </Pressable>
//         <Pressable onPress={() => router.push("/(admin)/register")} style={[styles.button, styles.adminButton]}>
//           <Text style={styles.buttonText}>Admin Sign Up</Text>
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
//     backgroundColor: '#f0f0f0', // Slightly darker background for a professional feel
//     padding: 20,
//   },
//   contentBox: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 15,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 5,
//     alignItems: "center",
//     width: '80%',
//     maxWidth: 350,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "700",
//     marginBottom: 20,
//     color: "#333",
//     textAlign: "center",
//   },
//   moduleTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#7F7FD5",
//     marginVertical: 10,
//   },
//   button: {
//     backgroundColor: "#7F7FD5",
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//     marginVertical: 10,
//     width: '100%',
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   adminButton: {
//     backgroundColor: "#BE93C5", // Different color for admin buttons
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });

// export default WelcomePage;





// app/(home)/WelcomePage.js
import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

const WelcomePage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Image
          source={require('../assets/employee.png')} // Replace with your logo image path
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to Employee Attendance Management System (EAMS)</Text>

        {/* Single Login for both User and Admin */}
        <Pressable onPress={() => router.push("/(auth)/login")} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable onPress={() => router.push("/(auth)/register")} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  contentBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    alignItems: "center",
    width: '80%',
    maxWidth: 350,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#7F7FD5",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default WelcomePage;
