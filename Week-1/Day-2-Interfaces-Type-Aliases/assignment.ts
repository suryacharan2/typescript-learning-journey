// assignment.ts
// What this file demonstrates: a small assignment using interfaces for a Hospital system
// Concepts used: interface, optional properties, readonly, extending interfaces, type alias

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed patient records with admission status

// Assignment: model a simple Hospital patient record system.

type BloodGroup = "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";

interface Person {
  name: string;
  age: number;
}

interface Patient extends Person {
  readonly patientId: number;
  bloodGroup: BloodGroup;
  isAdmitted: boolean;
  ward?: string; // only present if the patient is admitted
}

let patients: Patient[] = [
  { patientId: 1, name: "Neha Joshi", age: 34, bloodGroup: "B+", isAdmitted: true, ward: "General Ward" },
  { patientId: 2, name: "Amit Kumar", age: 45, bloodGroup: "O-", isAdmitted: false },
  { patientId: 3, name: "Sara Khan", age: 29, bloodGroup: "A+", isAdmitted: true, ward: "ICU" },
];

function printPatientRecords(records: Patient[]): void {
  records.forEach((patient) => {
    const status: string = patient.isAdmitted
      ? `Admitted in ${patient.ward}`
      : "Not admitted";
    console.log(`#${patient.patientId} ${patient.name} (${patient.age}, ${patient.bloodGroup}) - ${status}`);
  });
}

printPatientRecords(patients);
