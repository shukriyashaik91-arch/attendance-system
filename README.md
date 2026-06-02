# Student Attendance Management System

## Project Overview

The Student Attendance Management System is a web application developed using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.

The system allows teachers to add student attendance records and automatically calculates attendance percentages. It also determines whether a student meets the minimum attendance requirement of 75% and calculates how many additional classes the student must attend to reach 75%.

---

## Features

* Add Student Details
* Store Student Data in MongoDB
* Calculate Attendance Percentage
* Display Student Attendance Dashboard
* Check Eligibility Based on 75% Attendance
* Calculate Classes Needed to Reach 75%
* Visual Progress Bar for Attendance

---

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

## Project Structure

attendance/

├── client/

│   ├── index.html

│   ├── dashboard.html

│   ├── style.css

│   └── script.js

│

├── server/

│   ├── server.js

│

│   ├── models/

│   │   ├── Student.js

│

│   └── routes/

│       └── attendanceRoutes.js

│

├── package.json

└── node_modules/

---

## Database Schema

### Student Collection

| Field           | Type   |
| --------------- | ------ |
| name            | String |
| rollNo          | String |
| totalClasses    | Number |
| attendedClasses | Number |

Example:

{
"name": "Shukriya",
"rollNo": "23KB1A3347",
"totalClasses": 100,
"attendedClasses": 68
}

---

## Attendance Formula

Attendance Percentage

Attendance % = (Attended Classes / Total Classes) × 100

Example:

Attendance % = (68 / 100) × 100

Attendance % = 68%

---

## Classes Required For 75%

The system automatically calculates the number of classes required to reach 75% attendance.

Example:

Total Classes = 100

Attended Classes = 68

Current Attendance = 68%

Required Additional Classes = 28

---

## Output

Student Dashboard displays:

* Student Name
* Roll Number
* Total Classes
* Attended Classes
* Attendance Percentage
* Progress Bar
* Eligibility Status
* Classes Needed to Reach 75%

Example Output:

Name: Shukriya

Roll No: 23KB1A3347

Attendance: 68%

Status: Not Eligible

Need 28 More Classes To Reach 75%

---

## How To Run The Project

### Step 1

Open terminal inside project folder.

Example:

cd attendance

---

### Step 2

Install dependencies.

npm install

---

### Step 3

Start MongoDB.

Ensure MongoDB is running on:

mongodb://127.0.0.1:27017/attendanceDB

---

### Step 4

Start Backend Server.

node server/server.js

Expected Output:

MongoDB Connected

Server running on port 5000

---

### Step 5

Run Frontend.

Open:

client/index.html

using Live Server.

---

### Step 6

Add Student Data.

Example:

Name: Shukriya

Roll No: 23KB1A3347

Total Classes: 100

Attended Classes: 68

Click:

Add Student

---

### Step 7

View Dashboard.

Open:

client/dashboard.html

The dashboard displays attendance percentage and eligibility status.

---

## Future Enhancements

* Student Login
* Teacher Login
* Subject-wise Marks
* Attendance Reports
* Charts and Analytics
* Email Notifications
* Admin Dashboard

---

## Conclusion

This project helps educational institutions manage attendance records efficiently and automatically determine student eligibility based on attendance requirements.
