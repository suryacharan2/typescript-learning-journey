# Day 5 (Week 2): Mini Project - Task Management System

## Objective
Bring together everything from both weeks — interfaces, generics, utility types, and modules — into one final project.

## What This Project Does
A console-based Task Management System that can:
- Create tasks with a title, description, and priority
- Update task fields partially (using `Partial<T>`)
- Change task status (todo, in-progress, done)
- Assign a task to a team member
- Filter tasks by status
- Generate a summary report using a generic `Record` type

## Concepts Used (Week 1 + Week 2 recap)
- Interfaces and type aliases (Week 1)
- Union types and narrowing (Week 1)
- Generics for a reusable `Repository<T>` class (Week 2)
- Utility types: `Partial`, `Pick`, `Record` (Week 2)
- Code split across modules (Week 2)

## How to Run
```bash
npx ts-node Week-2/Day-5-Mini-Project/src/index.ts
```

## Project Structure
```
Day-5-Mini-Project/
├── README.md
├── notes.md
└── src/
    ├── types.ts          # interfaces and type aliases for Task
    ├── repository.ts     # generic reusable repository class
    ├── taskService.ts     # task-specific business logic
    └── index.ts          # entry point that runs the demo
```

## What I Learned Building This
This project made the biggest difference in how the two weeks connected. The `Repository<T>` class from generics turned out to be reusable for any entity with an `id`, not just tasks — which is exactly the kind of reusability generics are meant for. Splitting the code into `types.ts`, `repository.ts`, and `taskService.ts` also felt like a more realistic project structure compared to the Week 1 mini project.
