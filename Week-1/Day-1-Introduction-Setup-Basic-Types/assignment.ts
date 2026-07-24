// assignment.ts
// What this file demonstrates: a small company-style assignment using Day 1 concepts
// Concepts used: basic types, array, tuple, enum, functions with void return

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed employee directory with department status

// Assignment: Build a simple employee directory print-out for onboarding day.

enum Department {
  Engineering,
  HR,
  Sales,
  Support,
}

// Each employee record: [id, name, age, department, isFullTime]
type EmployeeRecord = [number, string, number, Department, boolean];

let employeeDirectory: EmployeeRecord[] = [
  [1, "Sanya Verma", 24, Department.Engineering, true],
  [2, "Rohit Nair", 29, Department.HR, true],
  [3, "Divya Rao", 22, Department.Sales, false],
  [4, "Farhan Ali", 27, Department.Support, true],
];

function printDirectory(directory: EmployeeRecord[]): void {
  console.log("----- Employee Directory -----");
  directory.forEach(([id, name, age, dept, fullTime]) => {
    const status: string = fullTime ? "Full-Time" : "Part-Time";
    console.log(
      `#${id} ${name} (${age}) - ${Department[dept]} - ${status}`
    );
  });
  console.log("-------------------------------");
}

printDirectory(employeeDirectory);
