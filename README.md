# 🏫 School Management System - Backend API

A complete RESTful backend API for managing students and teachers in a school system built using **Node.js, Express.js, and MongoDB Atlas**.

---

## 🚀 Live API

👉 Base URL:
https://crud-backend-mern.onrender.com

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- cors

---

## 📁 Project Structure

project/
│
├── model/
│ ├── studentschema.js
│ └── teacherschema.js
│
├── controller/
│ ├── studentcontroller/
│ └── teachercontroller/
│
├── routes/
│ ├── studentroutes.js
│ └── teacherroutes.js
│
├── config/
│ └── db.js
│
├── server.js
├── .env
└── package.json

## 📌 Features

### 👨‍🎓 Student Module
- Add student
- Get all students
- Get student by roll number
- Update student
- Delete student

### 👨‍🏫 Teacher Module
- Add teacher
- Get all teachers
- Get teacher by teacherId
- Update teacher
- Delete teacher

---

## 📡 API Endpoints

### 🧑‍🎓 Student Routes

| Method | Endpoint | Description |
|-------|----------|-------------|
| POST | `/students/addstudent` | Add new student |
| GET | `/students/getstudentdata` | Get all students |
| GET | `/students/getstudent/rollno/:rollno` | Get student by rollno |
| PUT | `/students/updatestudent/rollno/:rollno` | Update student |
| DELETE | `/students/deletestudent/rollno/:rollno` | Delete student |

---

### 👨‍🏫 Teacher Routes

| Method | Endpoint | Description |
|-------|----------|-------------|
| POST | `/teachers/addteacher` | Add new teacher |
| GET | `/teachers/getteacherdata` | Get all teachers |
| GET | `/teachers/getteacherdata/:teacherId` | Get teacher by ID |
| PUT | `/teachers/updateteacher/:teacherId` | Update teacher |
| DELETE | `/teachers/deleteteacher/:teacherId` | Delete teacher |

### You can test APIs using **Postman** or **Thunder Client**
### Example (Add Student)

**POST**

https://crud-backend-mern.onrender.com/students/addstudent

### 📥 How to Clone & Setup Project

```bash
git clone https://github.com/Anuj-789/Crud-Backend-Mern.git

cd Crud-Backend-Mern

npm install

npm run dev

