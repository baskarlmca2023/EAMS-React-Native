// import { Stack } from "expo-router";

// export default function Layout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="index" />
//       <Stack.Screen name="employees" />
//       <Stack.Screen name="adddetails" />
//       <Stack.Screen name="markattendance" />
//       <Stack.Screen name="[user]" />
//       <Stack.Screen name="summary" />
//     </Stack>
//   );
// }

// // app/(home)/_layout.js
// import { Stack } from "expo-router";

// export default function Layout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="(home)/WelcomePage" />
//       <Stack.Screen name="(auth)/login" />
//       <Stack.Screen name="(auth)/register" />
//       <Stack.Screen name="/index" />
//       <Stack.Screen name="/employees" />
//       <Stack.Screen name="/adddetails" />
//       <Stack.Screen name="/attendace-report" />
//       <Stack.Screen name="/markattendance" />
//       <Stack.Screen name="/summary" />
//     </Stack>
//   );
// }





 // app/(home)/_layout.js
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Home Screens */}
      <Stack.Screen name="(home)/WelcomePage" />
      <Stack.Screen name="(auth)/login" />
      <Stack.Screen name="(auth)/register" />
      <Stack.Screen name="/index" />
      <Stack.Screen name="/employees" />
      <Stack.Screen name="/adddetails" />
      <Stack.Screen name="/attendance-report" />
      <Stack.Screen name="/markattendance" />
      <Stack.Screen name="/summary" />
      <Stack.Screen name="context/UserContext" />

      {/* Admin Screens */}
      <Stack.Screen name="/(admin)/dashboard" />
      <Stack.Screen name="/(admin)/manageUsers" />
      <Stack.Screen name="/(admin)/reports" />
      <Stack.Screen name="/(admin)/login" />
      <Stack.Screen name="/(admin)/register" />

      <Stack.Screen name="/allGenerateReports" />
<Stack.Screen name="/overtimeEmployees" />
<Stack.Screen name="/attendanceCriteria" />
<Stack.Screen name="/increasedWorkflow" />
<Stack.Screen name="/costSavings" />
<Stack.Screen name="/employeePerformance" />

    </Stack>
  );
}
