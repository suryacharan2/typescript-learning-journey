// studentService.ts
// What this file demonstrates: functions that operate on an array of Student objects
// Concepts used: typed functions, arrays, interfaces, union types
// Expected output: no direct output, functions are used from index.ts

import { Student, StudentStatus } from "./types";

let students: Student[] = [];
let nextId = 1;

export function addStudent(name: string, age: number, grade: number): Student {
  const newStudent: Student = {
    id: nextId++,
    name,
    age,
    grade,
    status: "active",
  };
  students.push(newStudent);
  return newStudent;
}

export function updateGrade(id: number, newGrade: number): boolean {
  const student = students.find((s) => s.id === id);
  if (!student) return false;
  student.grade = newGrade;
  return true;
}

export function setStatus(id: number, status: StudentStatus): boolean {
  const student = students.find((s) => s.id === id);
  if (!student) return false;
  student.status = status;
  return true;
}

export function findStudentById(id: number): Student | undefined {
  return students.find((s) => s.id === id);
}

export function getAllStudents(): Student[] {
  return students;
}

export function getClassAverage(): number {
  if (students.length === 0) return 0;
  const total = students.reduce((sum, s) => sum + s.grade, 0);
  return total / students.length;
}
