// practice.ts
// What this file demonstrates: practice exercises using basic types
// Concepts used: string, number, boolean, array, tuple, enum

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed results for each exercise

// Exercise 1 (easy): declare basic variables for a product
let productName: string = "Notebook";
let productPrice: number = 45;
let inStock: boolean = true;
console.log(`${productName} costs ${productPrice} and in stock: ${inStock}`);

// Exercise 2 (easy): array of employee names
let employees: string[] = ["Arjun", "Meena", "Karthik"];
console.log("Employees:", employees.join(", "));

// Exercise 3 (medium): tuple for a book (title, pages, price)
let book: [string, number, number] = ["Clean Code", 464, 799];
console.log(`Book: ${book[0]}, Pages: ${book[1]}, Price: Rs.${book[2]}`);

// Exercise 4 (medium): enum for vehicle type
enum VehicleType {
  Car,
  Bike,
  Truck,
}
let myVehicle: VehicleType = VehicleType.Bike;
console.log("Vehicle type:", VehicleType[myVehicle]); // convert back to name

// Exercise 5 (harder): function that takes a tuple and prints formatted info
function printBookInfo(bookData: [string, number, number]): void {
  const [title, pages, price] = bookData;
  console.log(`"${title}" has ${pages} pages and costs Rs.${price}`);
}
printBookInfo(book);

// Exercise 6 (harder): array of tuples representing multiple employees with IDs
let employeeRecords: [number, string][] = [
  [101, "Arjun"],
  [102, "Meena"],
  [103, "Karthik"],
];
employeeRecords.forEach(([id, name]) => {
  console.log(`ID: ${id}, Name: ${name}`);
});
