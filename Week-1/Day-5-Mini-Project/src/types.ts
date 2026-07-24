// types.ts
// What this file demonstrates: interfaces and type aliases for the Student Management System
// Concepts used: interface, type alias, union types
// Expected output: no direct output, this file only defines types used elsewhere

export type StudentStatus = "active" | "inactive";

export interface Student {
  readonly id: number;
  name: string;
  age: number;
  grade: number; // out of 100
  status: StudentStatus;
}
