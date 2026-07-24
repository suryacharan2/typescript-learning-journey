// assignment.ts
// What this file demonstrates: an assignment using utility types for a Task Management preview system
// Concepts used: Partial, Pick, Omit, Record, Readonly

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed task summaries and status mapping

// Assignment: build small helper functions for a Task system using utility types.

interface Task {
  id: number;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  assignedTo?: string;
}

// Only show id, title, and status in a list view
type TaskPreview = Pick<Task, "id" | "title" | "status">;

function getTaskPreview(task: Task): TaskPreview {
  return { id: task.id, title: task.title, status: task.status };
}

// Allow partial updates to a task
function updateTask(task: Task, updates: Partial<Task>): Task {
  return { ...task, ...updates };
}

// A version of Task without the description, for compact storage
type CompactTask = Omit<Task, "description">;

function toCompactTask(task: Task): CompactTask {
  const { description, ...rest } = task;
  return rest;
}

// Status label lookup
const statusLabels: Record<Task["status"], string> = {
  "todo": "To Do",
  "in-progress": "In Progress",
  "done": "Completed",
};

const task1: Task = {
  id: 1,
  title: "Set up project repo",
  description: "Initialize the repository and add base configuration",
  status: "in-progress",
  assignedTo: "Rhea",
};

console.log("Preview:", getTaskPreview(task1));
console.log("Compact:", toCompactTask(task1));
console.log("Status label:", statusLabels[task1.status]);

const updatedTask = updateTask(task1, { status: "done" });
console.log("Updated task status label:", statusLabels[updatedTask.status]);
