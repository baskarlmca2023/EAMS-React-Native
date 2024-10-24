// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const moment = require("moment");

// const app = express();
// const port = 8000;
// const cors = require("cors");
// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// mongoose
//   .connect("mongodb+srv://sujan:sujan@cluster0.zv7uvht.mongodb.net/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.log("Error connecting to MongoDB", error);
//   });

// app.listen(port, () => {
//   console.log("Server is running on port 8000");
// });

// const Employee = require("./models/employee");
// const Attendance = require("./models/attendance");

// //endpoint to register a employee
// app.post("/addEmployee", async (req, res) => {
//   try {
//     const {
//       employeeName,
//       employeeId,
//       designation,
//       phoneNumber,
//       dateOfBirth,
//       joiningDate,
//       activeEmployee,
//       salary,//////
//       address,
//     } = req.body;

//     //create a new Employee
//     const newEmployee = new Employee({
//       employeeName,
//       employeeId,
//       designation,
//       phoneNumber,
//       dateOfBirth,
//       joiningDate,
//       activeEmployee,
//       salary,
//       address,
//     });

//     await newEmployee.save();

//     res
//       .status(201)
//       .json({ message: "Employee saved successfully", employee: newEmployee });
//   } catch (error) {
//     console.log("Error creating employee", error);
//     res.status(500).json({ message: "Failed to add an employee" });
//   }
// });

// //endpoint to fetch all the employees
// app.get("/employees", async (req, res) => {
//   try {
//     const employees = await Employee.find();
//     res.status(200).json(employees);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to retrieve the employees" });
//   }
// });

// app.post("/attendance", async (req, res) => {
//   try {
//     const { employeeId, employeeName, date, status } = req.body;

//     const existingAttendance = await Attendance.findOne({ employeeId, date });

//     if (existingAttendance) {
//       existingAttendance.status = status;
//       await existingAttendance.save();
//       res.status(200).json(existingAttendance);
//     } else {
//       const newAttendance = new Attendance({
//         employeeId,/
//         employeeName,
//         date,
//         status,
//       });
//       await newAttendance.save();
//       res.status(200).json(newAttendance);
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error submitting attendance" });
//   }
// });

// app.get("/attendance", async (req, res) => {
//   try {
//     const { date } = req.query;

//     // Find attendance records for the specified date
//     const attendanceData = await Attendance.find({ date: date });

//     res.status(200).json(attendanceData);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching attendance data" });
//   }
// });

// app.get("/attendance-report-all-employees", async (req, res) => {
//     try {
//       const { month, year } = req.query;

//       console.log("Query parameters:", month, year);
//       // Calculate the start and end dates for the selected month and year
//       const startDate = moment(`${year}-${month}-01`, "YYYY-MM-DD")
//         .startOf("month")
//         .toDate();
//       const endDate = moment(startDate).endOf("month").toDate();

//       // Aggregate attendance data for all employees and date range
//       const report = await Attendance.aggregate([
//         {
//           $match: {
//             $expr: {
//               $and: [
//                 {
//                   $eq: [
//                     { $month: { $dateFromString: { dateString: "$date" } } },
//                     parseInt(req.query.month),
//                   ],
//                 },
//                 {
//                   $eq: [
//                     { $year: { $dateFromString: { dateString: "$date" } } },
//                     parseInt(req.query.year),
//                   ],
//                 },
//               ],
//             },
//           },
//         },

//         {
//           $group: {
//             _id: "$employeeId",
//             present: {
//               $sum: {
//                 $cond: { if: { $eq: ["$status", "present"] }, then: 1, else: 0 },
//               },
//             },
//             absent: {
//               $sum: {
//                 $cond: { if: { $eq: ["$status", "absent"] }, then: 1, else: 0 },
//               },
//             },
//             halfday: {
//               $sum: {
//                 $cond: { if: { $eq: ["$status", "halfday"] }, then: 1, else: 0 },
//               },
//             },
//             holiday: {
//               $sum: {
//                 $cond: { if: { $eq: ["$status", "holiday"] }, then: 1, else: 0 },
//               },
//             },
//           },
//         },
//         {
//           $lookup: {
//             from: "employees", // Name of the employee collection
//             localField: "_id",
//             foreignField: "employeeId",
//             as: "employeeDetails",
//           },
//         },
//         {
//           $unwind: "$employeeDetails", // Unwind the employeeDetails array
//         },
//         {
//           $project: {
//             _id: 1,
//             present: 1,
//             absent: 1,
//             halfday: 1,
//             name: "$employeeDetails.employeeName",
//             designation:"$employeeDetails.designation",
//             salary: "$employeeDetails.salary",
//             employeeId: "$employeeDetails.employeeId",
//           },
//         },
//       ]);

//       res.status(200).json({ report });
//     } catch (error) {
//       console.error("Error generating attendance report:", error);
//       res.status(500).json({ message: "Error generating the report" });
//     }
//   });











// //baskar
// //api/index.js
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const moment = require("moment");
// const cors = require("cors");
// const bcrypt = require("bcrypt");

// const app = express();
// const port = 8000;

// // Middlewares
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose
//   .connect("mongodb+srv://baskar:baskar@cluster0.h1izr.mongodb.net/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB", error);
//   });

// // Import models
// const Employee = require("./models/employee");
// const Attendance = require("./models/attendance");
// const User = require("./models/user"); 
// const Admin = require("./models/admin"); 

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// // Endpoint to register an employee
// app.post("/addEmployee", async (req, res) => {
//   try {
//     const {
//       employeeName,
//       employeeId,
//       designation,
//       phoneNumber,
//       dateOfBirth,
//       joiningDate,
//       activeEmployee,
//       salary,
//       address,
//     } = req.body;

//     const newEmployee = new Employee({
//       employeeName,
//       employeeId,
//       designation,
//       phoneNumber,
//       dateOfBirth,
//       joiningDate,
//       activeEmployee,
//       salary,
//       address,
//     });

//     await newEmployee.save();

//     res.status(201).json({ message: "Employee saved successfully", employee: newEmployee });
//   } catch (error) {
//     console.error("Error creating employee", error);
//     res.status(500).json({ message: "Failed to add an employee" });
//   }
// });

// // Endpoint to fetch all employees
// app.get("/employees", async (req, res) => {
//   try {
//     const employees = await Employee.find();
//     res.status(200).json(employees);
//   } catch (error) {
//     console.error("Error fetching employees", error);
//     res.status(500).json({ message: "Failed to retrieve the employees" });
//   }
// });

// // Endpoint to manage attendance
// app.post("/attendance", async (req, res) => {
//   try {
//     const { employeeId, employeeName, date, status } = req.body;

//     const existingAttendance = await Attendance.findOne({ employeeId, date });

//     if (existingAttendance) {
//       existingAttendance.status = status;
//       await existingAttendance.save();
//       res.status(200).json(existingAttendance);
//     } else {
//       const newAttendance = new Attendance({
//         employeeId,
//         employeeName,
//         date,
//         status,
//       });
//       await newAttendance.save();
//       res.status(200).json(newAttendance);
//     }
//   } catch (error) {
//     console.error("Error submitting attendance", error);
//     res.status(500).json({ message: "Error submitting attendance" });
//   }
// });

// // Endpoint to fetch attendance by date
// app.get("/attendance", async (req, res) => {
//   try {
//     const { date } = req.query;
//     const attendanceData = await Attendance.find({ date });

//     res.status(200).json(attendanceData);
//   } catch (error) {
//     console.error("Error fetching attendance data", error);
//     res.status(500).json({ message: "Error fetching attendance data" });
//   }
// });

// // Endpoint to generate attendance report for all employees
// app.get("/attendance-report-all-employees", async (req, res) => {
//   try {
//     const { month, year } = req.query;

//     const report = await Attendance.aggregate([
//       {
//         $match: {
//           $expr: {
//             $and: [
//               { $eq: [{ $month: { $dateFromString: { dateString: "$date" } } }, parseInt(month)] },
//               { $eq: [{ $year: { $dateFromString: { dateString: "$date" } } }, parseInt(year)] },
//             ],
//           },
//         },
//       },
//       {
//         $group: {
//           _id: "$employeeId",
//           present: { $sum: { $cond: [{ $eq: ["$status", "present"] }, 1, 0] } },
//           absent: { $sum: { $cond: [{ $eq: ["$status", "absent"] }, 1, 0] } },
//           halfday: { $sum: { $cond: [{ $eq: ["$status", "halfday"] }, 1, 0] } },
//           holiday: { $sum: { $cond: [{ $eq: ["$status", "holiday"] }, 1, 0] } },
//         },
//       },
//       {
//         $lookup: {
//           from: "employees", // Name of the employee collection
//           localField: "_id",
//           foreignField: "employeeId",
//           as: "employeeDetails",
//         },
//       },
//       { $unwind: "$employeeDetails" },
//       {
//         $project: {
//           _id: 1,
//           present: 1,
//           absent: 1,
//           halfday: 1,
//           holiday: 1,
//           name: "$employeeDetails.employeeName",
//           designation: "$employeeDetails.designation",
//           salary: "$employeeDetails.salary",
//           employeeId: "$employeeDetails.employeeId",
//         },
//       },
//     ]);

//     res.status(200).json({ report });
//   } catch (error) {
//     console.error("Error generating attendance report:", error);
//     res.status(500).json({ message: "Error generating the report" });
//   }
// });




// app.post("/register", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash the password
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword, // Store hashed password
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully", user: newUser });
//   } catch (error) {
//     console.error("Error registering user", error);
//     res.status(500).json({ message: "Failed to register user" });
//   }
// });

// // Endpoint to login a user
// app.post("/login", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid username or password" });
//     }

//     // Compare the password with the hashed password
//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//       return res.status(400).json({ message: "Invalid username or password" });
//     }

//     res.status(200).json({ message: "Login successful", user });
//   } catch (error) {
//     console.error("Error logging in", error);
//     res.status(500).json({ message: "Login failed" });
//   }
// });






// // Admin Registration Route
// app.post("/admin/register", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Check if admin already exists
//     const existingAdmin = await User.findOne({ username, role: 'admin' });
//     if (existingAdmin) {
//       return res.status(400).json({ message: "Admin already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newAdmin = new User({
//       username,
//       email,
//       password: hashedPassword,
//       role: 'admin', // Set role as admin
//     });

//     await newAdmin.save();
//     res.status(201).json({ message: "Admin registered successfully", admin: newAdmin });
//   } catch (error) {
//     console.error("Error registering admin", error);
//     res.status(500).json({ message: "Failed to register admin" });
//   }
// });

// // Admin Login Route
// app.post("/admin/login", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const admin = await User.findOne({ username, role: 'admin' });
//     if (!admin) {
//       return res.status(400).json({ message: "Invalid admin credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     res.status(200).json({ message: "Admin login successful", user: admin });
//   } catch (error) {
//     console.error("Error logging in admin", error);
//     res.status(500).json({ message: "Login failed" });
//   }
// });

// // Middleware to protect admin routes
// const verifyAdmin = async (req, res, next) => {
//   const { userId } = req.headers; // Assume we're passing the admin user ID in headers
//   const admin = await User.findOne({ _id: userId, role: 'admin' });
//   if (!admin) {
//     return res.status(403).json({ message: "Unauthorized access" });
//   }
//   next();
// };

// // Admin-only route example (Admin Dashboard)
// app.get("/admin/dashboard", verifyAdmin, (req, res) => {
//   res.status(200).json({ message: "Welcome to Admin Dashboard" });
// });








// Import necessary packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

// Initialize Express app
const app = express();
const port = 8000;

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect("mongodb+srv://baskar:baskar@cluster0.h1izr.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

// Import models
const Employee = require("./models/employee");
const Attendance = require("./models/attendance");
const User = require("./models/user");
const Admin = require("./models/admin");

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Endpoint to register a user
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword, // Store hashed password
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error registering user", error);
    res.status(500).json({ message: "Failed to register user" });
  }
});

// Endpoint to login a user
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare the password with the hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Send back the user info including role
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error logging in", error);
    res.status(500).json({ message: "Login failed" });
  }
});

// Admin Registration Route
app.post("/admin/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if admin already exists
    const existingAdmin = await User.findOne({ username, role: 'admin' });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new User({
      username,
      email,
      password: hashedPassword,
      role: 'admin', // Set role as admin
    });

    await newAdmin.save();
    res.status(201).json({ message: "Admin registered successfully", admin: newAdmin });
  } catch (error) {
    console.error("Error registering admin", error);
    res.status(500).json({ message: "Failed to register admin" });
  }
});

// Admin Login Route
app.post("/admin/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await User.findOne({ username, role: 'admin' });
    if (!admin) {
      return res.status(400).json({ message: "Invalid admin credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Admin login successful", user: admin });
  } catch (error) {
    console.error("Error logging in admin", error);
    res.status(500).json({ message: "Login failed" });
  }
});

// Middleware to protect admin routes
const verifyAdmin = async (req, res, next) => {
  const { userId } = req.headers; // Assume we're passing the admin user ID in headers
  const admin = await User.findOne({ _id: userId, role: 'admin' });
  if (!admin) {
    return res.status(403).json({ message: "Unauthorized access" });
  }
  next();
};

// Admin-only route example (Admin Dashboard)
app.get("/admin/dashboard", verifyAdmin, (req, res) => {
  res.status(200).json({ message: "Welcome to Admin Dashboard" });
});

// Endpoint to register an employee
app.post("/addEmployee", async (req, res) => {
  try {
    const {
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    } = req.body;

    const newEmployee = new Employee({
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    });

    await newEmployee.save();

    res.status(201).json({ message: "Employee saved successfully", employee: newEmployee });
  } catch (error) {
    console.error("Error creating employee", error);
    res.status(500).json({ message: "Failed to add an employee" });
  }
});

// Endpoint to fetch all employees
app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employees", error);
    res.status(500).json({ message: "Failed to retrieve the employees" });
  }
});

// Endpoint to manage attendance
app.post("/attendance", async (req, res) => {
  try {
    const { employeeId, employeeName, date, status } = req.body;

    const existingAttendance = await Attendance.findOne({ employeeId, date });

    if (existingAttendance) {
      existingAttendance.status = status;
      await existingAttendance.save();
      res.status(200).json(existingAttendance);
    } else {
      const newAttendance = new Attendance({
        employeeId,
        employeeName,
        date,
        status,
      });
      await newAttendance.save();
      res.status(200).json(newAttendance);
    }
  } catch (error) {
    console.error("Error submitting attendance", error);
    res.status(500).json({ message: "Error submitting attendance" });
  }
});

// Endpoint to fetch attendance by date
app.get("/attendance", async (req, res) => {
  try {
    const { date } = req.query;
    const attendanceData = await Attendance.find({ date });

    res.status(200).json(attendanceData);
  } catch (error) {
    console.error("Error fetching attendance data", error);
    res.status(500).json({ message: "Error fetching attendance data" });
  }
});

// Endpoint to generate attendance report for all employees
app.get("/attendance-report-all-employees", async (req, res) => {
  try {
    const { month, year } = req.query;

    const report = await Attendance.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              { $eq: [{ $month: { $dateFromString: { dateString: "$date" } } }, parseInt(month)] },
              { $eq: [{ $year: { $dateFromString: { dateString: "$date" } } }, parseInt(year)] },
            ],
          },
        },
      },
      {
        $group: {
          _id: "$employeeId",
          present: { $sum: { $cond: [{ $eq: ["$status", "present"] }, 1, 0] } },
          absent: { $sum: { $cond: [{ $eq: ["$status", "absent"] }, 1, 0] } },
          halfday: { $sum: { $cond: [{ $eq: ["$status", "halfday"] }, 1, 0] } },
          holiday: { $sum: { $cond: [{ $eq: ["$status", "holiday"] }, 1, 0] } },
        },
      },
      {
        $lookup: {
          from: "employees", // Name of the employee collection
          localField: "_id",
          foreignField: "employeeId",
          as: "employeeDetails",
        },
      },
      { $unwind: "$employeeDetails" },
      {
        $project: {
          _id: 1,
          present: 1,
          absent: 1,
          halfday: 1,
          holiday: 1,
          name: "$employeeDetails.employeeName",
          designation: "$employeeDetails.designation",
          phoneNumber: "$employeeDetails.phoneNumber",
        },
      },
    ]);

    res.status(200).json(report);
  } catch (error) {
    console.error("Error generating attendance report", error);
    res.status(500).json({ message: "Error generating attendance report" });
  }
});

