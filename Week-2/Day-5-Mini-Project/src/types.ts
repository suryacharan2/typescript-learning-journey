// types.ts
// What this file demonstrates: interfaces and type aliases for the Task Management System
// Concepts used: interface, type alias, union types
// Expected output: no direct output, this file only defines types used elsewhere

export type TaskStatus = "todo" | "in-progress" | "done";
export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  readonly id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignedTo?: string;
}
