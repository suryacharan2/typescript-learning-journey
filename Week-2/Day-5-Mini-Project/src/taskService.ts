// taskService.ts
// What this file demonstrates: business logic for managing tasks, built on top of the generic Repository
// Concepts used: Repository<T> generics, Task interface, utility types (Pick, Record)
// Expected output: no direct output, functions are used from index.ts

import { Repository } from "./repository";
import { Task, TaskStatus } from "./types";

const taskRepository = new Repository<Task>();

export function createTask(
  title: string,
  description: string,
  priority: Task["priority"]
): Task {
  return taskRepository.add({
    title,
    description,
    priority,
    status: "todo",
  });
}

export function assignTask(id: number, assignee: string): Task | undefined {
  return taskRepository.update(id, { assignedTo: assignee });
}

export function updateStatus(id: number, status: TaskStatus): Task | undefined {
  return taskRepository.update(id, { status });
}

export function getTasksByStatus(status: TaskStatus): Task[] {
  return taskRepository.filter((task) => task.status === status);
}

export function getAllTasks(): Task[] {
  return taskRepository.getAll();
}

// Task summary using Pick and Record utility types
type TaskSummary = Pick<Task, "id" | "title" | "status">;

export function getTaskSummaries(): TaskSummary[] {
  return taskRepository.getAll().map(({ id, title, status }) => ({ id, title, status }));
}

export function getStatusCounts(): Record<TaskStatus, number> {
  const counts: Record<TaskStatus, number> = {
    "todo": 0,
    "in-progress": 0,
    "done": 0,
  };
  taskRepository.getAll().forEach((task) => {
    counts[task.status]++;
  });
  return counts;
}
