# TypeScript Learning Journey

A daily log of my TypeScript learning during my internship — concepts, code examples, practice exercises, and two mini projects, built up over two weeks.

## About This Repository

I started this repo to track my TypeScript learning day by day during my internship training program. Each folder represents one day of study, with the topic I covered, code I wrote to understand it, and small practice/assignment exercises. The goal was to go from "what is a type" to being comfortable using TypeScript in a real Node.js project.

I'm keeping this updated as I go, so the later days build on concepts from earlier ones.

## Learning Goals

- Understand TypeScript's type system and how it improves on plain JavaScript
- Get comfortable with interfaces, types, functions, and generics
- Learn how utility types and modules are used in real projects
- Apply everything in two mini projects instead of only isolated examples
- Build habits around writing typed, maintainable code

## Course Syllabus

**Week 1 – Fundamentals**
| Day | Topic |
|-----|-------|
| 1 | Introduction, Setup, Basic Types |
| 2 | Interfaces & Type Aliases |
| 3 | Functions & Type Inference |
| 4 | Union & Intersection Types |
| 5 | Mini Project – Student Management System |

**Week 2 – Intermediate Concepts**
| Day | Topic |
|-----|-------|
| 1 | Generics |
| 2 | Advanced Generics |
| 3 | Utility Types |
| 4 | Modules & Namespaces |
| 5 | Mini Project – Task Management System |

## Repository Structure

```
typescript-learning-journey/
├── README.md
├── package.json
├── tsconfig.json
├── .gitignore
├── Week-1/
│   ├── Day-1-Introduction-Setup-Basic-Types/
│   ├── Day-2-Interfaces-Type-Aliases/
│   ├── Day-3-Functions-Type-Inference/
│   ├── Day-4-Union-Intersection-Types/
│   └── Day-5-Mini-Project/
├── Week-2/
│   ├── Day-1-Generics/
│   ├── Day-2-Advanced-Generics/
│   ├── Day-3-Utility-Types/
│   ├── Day-4-Modules-Namespaces/
│   └── Day-5-Mini-Project/
├── Notes/
│   ├── Interview-Questions.md
│   ├── TypeScript-CheatSheet.md
│   └── Commands.md
```

## Progress Tracker

- [x] Week 1 - Day 1: Introduction, Setup, Basic Types
- [x] Week 1 - Day 2: Interfaces & Type Aliases
- [x] Week 1 - Day 3: Functions & Type Inference
- [x] Week 1 - Day 4: Union & Intersection Types
- [x] Week 1 - Day 5: Mini Project (Student Management System)
- [x] Week 2 - Day 1: Generics
- [x] Week 2 - Day 2: Advanced Generics
- [x] Week 2 - Day 3: Utility Types
- [x] Week 2 - Day 4: Modules & Namespaces
- [x] Week 2 - Day 5: Mini Project (Task Management System)

> Note: checkboxes reflect content completed in this repo. Update them to match your actual daily progress as you work through each folder.

## Technologies Used

- TypeScript
- Node.js
- ts-node (for running .ts files directly)
- VS Code

## How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/typescript-learning-journey.git
   cd typescript-learning-journey
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run any example file directly with ts-node
   ```bash
   npx ts-node Week-1/Day-1-Introduction-Setup-Basic-Types/examples.ts
   ```
4. Or compile everything with the TypeScript compiler
   ```bash
   npm run build
   ```

## Folder Explanation

Each day folder contains:
- `README.md` – objective, topics covered, theory, real-world usage, and summary for that day
- `examples.ts` – small commented examples demonstrating the day's concepts
- `practice.ts` – practice problems, ordered from easier to harder
- `assignment.ts` – one small assignment styled like a real task
- `commands.md` – terminal/TypeScript commands used that day, with explanations
- `notes.md` – a short reflection template to fill in personally after completing the day

Mini project days (`Day-5-Mini-Project`) contain a `src/` folder with the actual project instead of the usual example files.

## Future Roadmap

- [ ] Add a Week 3 covering TypeScript with Express.js (REST APIs)
- [ ] Explore TypeScript decorators
- [ ] Learn TypeScript with a testing framework (Jest)
- [ ] Try TypeScript in a small React project
- [ ] Write unit tests for both mini projects

## Contributing

This is a personal learning repository, but suggestions and corrections are welcome. Feel free to open an issue if you spot a mistake in an example or explanation.

## License

This project is licensed under the MIT License.

# typescript-learning-journey