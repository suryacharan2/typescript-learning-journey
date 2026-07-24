// practice.ts
// What this file demonstrates: practice exercises with union and intersection types
// Concepts used: union types, narrowing, intersection types, discriminated unions

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed results for each exercise

// Exercise 1 (easy): union type for a rating that can be a number or a string label
type Rating = number | "unrated";
let movieRating: Rating = "unrated";
console.log("Rating:", movieRating);
movieRating = 4;
console.log("Rating:", movieRating);

// Exercise 2 (easy): function accepting a union type
function printQuantity(quantity: number | string): void {
  console.log("Quantity:", quantity);
}
printQuantity(10);
printQuantity("out of stock");

// Exercise 3 (medium): narrowing with typeof
function doubleIfNumber(value: number | string): void {
  if (typeof value === "number") {
    console.log("Doubled:", value * 2);
  } else {
    console.log("Not a number:", value);
  }
}
doubleIfNumber(21);
doubleIfNumber("hello");

// Exercise 4 (medium): intersection type for a Library item with borrowing info
type LibraryItem = { title: string; itemId: number };
type BorrowInfo = { borrowedBy: string; dueDate: string };
type BorrowedItem = LibraryItem & BorrowInfo;

let borrowed: BorrowedItem = {
  title: "The Hobbit",
  itemId: 12,
  borrowedBy: "Tanvi",
  dueDate: "2026-08-01",
};
console.log(borrowed);

// Exercise 5 (harder): discriminated union for payment results
type SuccessResult = { status: "success"; transactionId: string };
type ErrorResult = { status: "error"; message: string };
type PaymentResult = SuccessResult | ErrorResult;

function handlePaymentResult(result: PaymentResult): void {
  if (result.status === "success") {
    console.log("Payment succeeded, transaction:", result.transactionId);
  } else {
    console.log("Payment failed:", result.message);
  }
}
handlePaymentResult({ status: "success", transactionId: "TXN12345" });
handlePaymentResult({ status: "error", message: "Insufficient funds" });

// Exercise 6 (harder): "in" narrowing for a Vehicle union
type ElectricVehicle = { batteryLevel: number };
type FuelVehicle = { fuelLevel: number };

function checkVehicleLevel(vehicle: ElectricVehicle | FuelVehicle): void {
  if ("batteryLevel" in vehicle) {
    console.log("Battery level:", vehicle.batteryLevel);
  } else {
    console.log("Fuel level:", vehicle.fuelLevel);
  }
}
checkVehicleLevel({ batteryLevel: 80 });
checkVehicleLevel({ fuelLevel: 45 });
