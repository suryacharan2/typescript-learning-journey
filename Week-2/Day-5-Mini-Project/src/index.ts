// index.ts
// What this file demonstrates: the entry point tying the whole Task Management System together
// Concepts used: everything from types.ts, repository.ts, and taskService.ts
// Expected output: printed task list, status updates, and a summary report

import {
  createTask,
  assignTask,
  updateStatus,
  getTasksByStatus,
  getAllTasks,
  getTaskSummaries,
  getStatusCounts,
} from "./taskService";

// Create some tasks
createTask("Design database schema", "Plan tables for the new feature", "high");
createTask("Write unit tests", "Cover the new API endpoints", "medium");
createTask("Fix login bug", "Users report random logouts", "high");
createTask("Update documentation", "Reflect recent API changes", "low");

// Assign and update statuses
assignTask(1, "Meera");
assignTask(3, "Arjun");
updateStatus(1, "in-progress");
updateStatus(3, "done");

// List all tasks
console.log("----- All Tasks -----");
getAllTasks().forEach((task) => {
  console.log(
    `#${task.id} [${task.priority}] ${task.title} - ${task.status}${task.assignedTo ? ` (assigned to ${task.assignedTo})` : ""}`
  );
});

// Filter by status
console.log("----- Tasks still To Do -----");
getTasksByStatus("todo").forEach((task) => console.log(task.title));

// Summary report using Pick and Record
console.log("----- Task Summaries -----");
console.log(getTaskSummaries());

console.log("----- Status Counts -----");
console.log(getStatusCounts());
