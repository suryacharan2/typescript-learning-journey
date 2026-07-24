// assignment.ts
// What this file demonstrates: a small company-style assignment using Day 1 concepts
// Concepts used: basic types, array, tuple, enum, functions with void return
// Expected output: printed employee directory with department status
// Assignment: Build a simple employee directory print-out for onboarding day.
var Department;
(function (Department) {
    Department[Department["Engineering"] = 0] = "Engineering";
    Department[Department["HR"] = 1] = "HR";
    Department[Department["Sales"] = 2] = "Sales";
    Department[Department["Support"] = 3] = "Support";
})(Department || (Department = {}));
let employeeDirectory = [
    [1, "Sanya Verma", 24, Department.Engineering, true],
    [2, "Rohit Nair", 29, Department.HR, true],
    [3, "Divya Rao", 22, Department.Sales, false],
    [4, "Farhan Ali", 27, Department.Support, true],
];
function printDirectory(directory) {
    console.log("----- Employee Directory -----");
    directory.forEach(([id, name, age, dept, fullTime]) => {
        const status = fullTime ? "Full-Time" : "Part-Time";
        console.log(`#${id} ${name} (${age}) - ${Department[dept]} - ${status}`);
    });
    console.log("-------------------------------");
}
printDirectory(employeeDirectory);
export {};
