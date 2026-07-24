// examples.ts
// What this file demonstrates: union types, intersection types, and narrowing
// Concepts used: union (|), intersection (&), typeof narrowing, in narrowing, discriminated unions

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed values showing narrowed and combined types

// Union type - a value can be one of several types
let productId: string | number;
productId = 501;
productId = "PRD-501";
console.log("Product ID:", productId);

// Narrowing a union using typeof
function displayId(id: string | number): void {
  if (typeof id === "string") {
    console.log("ID (string):", id.toUpperCase());
  } else {
    console.log("ID (number):", id.toFixed(0));
  }
}
displayId("abc123");
displayId(9999);

// Intersection type - combining two object shapes
type Timestamps = {
  createdAt: string;
  updatedAt: string;
};

type User = {
  name: string;
  email: string;
};

type UserWithTimestamps = User & Timestamps;

let userRecord: UserWithTimestamps = {
  name: "Ishaan",
  email: "ishaan@example.com",
  createdAt: "2026-01-01",
  updatedAt: "2026-01-05",
};
console.log(userRecord);

// Narrowing with "in" operator
type Car = { drive: () => void };
type Boat = { sail: () => void };

function operateVehicle(vehicle: Car | Boat): void {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
operateVehicle({ drive: () => console.log("Driving the car") });
operateVehicle({ sail: () => console.log("Sailing the boat") });

// Discriminated union - each shape has a common "kind" field
type CircleShape = { kind: "circle"; radius: number };
type SquareShape = { kind: "square"; side: number };
type Shape = CircleShape | SquareShape;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.side * shape.side;
  }
}
console.log("Circle area:", getArea({ kind: "circle", radius: 5 }).toFixed(2));
console.log("Square area:", getArea({ kind: "square", side: 4 }));
