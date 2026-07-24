// assignment.ts
// What this file demonstrates: an assignment using advanced generics for an Order system
// Concepts used: generic classes, keyof, default generic types, generics with unions

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed order processing results

// Assignment: build a generic Order result handler with keyof-based field updates.

interface Order {
  id: number;
  item: string;
  quantity: number;
  status: "pending" | "shipped" | "delivered";
}

class OperationResult<T, E = string> {
  constructor(public success: boolean, public data?: T, public error?: E) {}
}

function updateOrderField<K extends keyof Order>(
  order: Order,
  key: K,
  value: Order[K]
): OperationResult<Order> {
  if (key === "quantity" && (value as number) <= 0) {
    return new OperationResult<Order>(false, undefined, "Quantity must be greater than zero");
  }
  const updatedOrder: Order = { ...order, [key]: value };
  return new OperationResult(true, updatedOrder);
}

const order: Order = { id: 1, item: "Desk Lamp", quantity: 2, status: "pending" };

const result1 = updateOrderField(order, "status", "shipped");
if (result1.success) {
  console.log("Order updated:", result1.data);
}

const result2 = updateOrderField(order, "quantity", -5);
if (!result2.success) {
  console.log("Update failed:", result2.error);
}
