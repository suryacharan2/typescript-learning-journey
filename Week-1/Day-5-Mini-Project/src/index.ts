// index.ts
// What this file demonstrates: the entry point that ties the Student Management System together
// Concepts used: everything from types.ts and studentService.ts
// Expected output: printed student list and class statistics in the terminal

import {
  addStudent,
  updateGrade,
  setStatus,
  findStudentById,
  getAllStudents,
  getClassAverage,
} from "./studentService";

// Add some students
addStudent("Ananya Sharma", 19, 78);
addStudent("Rohan Mehta", 20, 85);
addStudent("Divya Iyer", 21, 92);

// Update a grade
updateGrade(2, 90);

// Mark a student inactive
setStatus(3, "inactive");

// Search for a student
const found = findStudentById(1);
console.log("Found student:", found);

// List all students
console.log("----- All Students -----");
getAllStudents().forEach((student) => {
  console.log(
    `#${student.id} ${student.name}, Age: ${student.age}, Grade: ${student.grade}, Status: ${student.status}`
  );
});

// Class statistics
console.log("-------------------------");
console.log("Class average grade:", getClassAverage().toFixed(2));
console.log("Total students:", getAllStudents().length);
