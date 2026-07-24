# Day 5: Mini Project - Student Management System

## Objective
Combine everything learned in Week 1 (basic types, interfaces, functions, unions) into one small working project instead of isolated examples.

## What This Project Does
A simple console-based Student Management System that can:
- Add students with their details
- Update a student's grade
- Mark a student as active/inactive
- List all students
- Search for a student by ID
- Print class statistics (average grade, total students)

## Concepts Used (Week 1 recap)
- Interfaces for the `Student` shape
- Type aliases for `Grade` and `StudentStatus`
- Union types for status handling
- Typed functions for every operation
- Arrays of objects to store the student list

## How to Run
```bash
npx ts-node Week-1/Day-5-Mini-Project/src/index.ts
```

## Project Structure
```
Day-5-Mini-Project/
├── README.md
├── notes.md
└── src/
    ├── types.ts        # interfaces and type aliases
    ├── studentService.ts  # functions for managing students
    └── index.ts        # entry point that runs the demo
```

## What I Learned Building This
Putting everything together in one project (instead of separate day-by-day files) showed how the concepts connect. Interfaces from Day 2 and functions from Day 3 aren't separate skills — they're used together constantly. Splitting the code into `types.ts` and `studentService.ts` also gave a first taste of organizing a project instead of writing everything in one file.
