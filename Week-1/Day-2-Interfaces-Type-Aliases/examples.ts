// examples.ts
// What this file demonstrates: interfaces and type aliases
// Concepts used: interface, optional properties, readonly, type alias, extending interfaces

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed objects and computed values

// Basic interface
interface Product {
  id: number;
  name: string;
  price: number;
}

let laptop: Product = { id: 1, name: "Laptop", price: 55000 };
console.log(laptop);

// Optional property using ?
interface Customer {
  name: string;
  email: string;
  phone?: string; // not every customer gives a phone number
}

let customer1: Customer = { name: "Aisha", email: "aisha@example.com" };
let customer2: Customer = { name: "Ravi", email: "ravi@example.com", phone: "9876543210" };
console.log(customer1, customer2);

// readonly property - cannot be changed after the object is created
interface Order {
  readonly orderId: number;
  item: string;
  quantity: number;
}

let order: Order = { orderId: 1001, item: "Keyboard", quantity: 2 };
console.log(order);
// order.orderId = 1002; // this would cause a compile error

// Type alias for a union of possible values
type PaymentMethod = "card" | "upi" | "cash";

function processPayment(method: PaymentMethod): void {
  console.log(`Processing payment via ${method}`);
}
processPayment("upi");

// Extending an interface
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

let staffMember: Employee = {
  name: "Kiran",
  age: 26,
  employeeId: 501,
  department: "Engineering",
};
console.log(staffMember);
