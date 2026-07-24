// assignment.ts
// What this file demonstrates: a small assignment using functions for a Shopping Cart
// Concepts used: typed functions, default parameters, rest parameters, function types

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed cart summary with total cost

// Assignment: build simple shopping cart calculation functions.

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

function calculateItemTotal(item: CartItem): number {
  return item.price * item.quantity;
}

function calculateCartTotal(items: CartItem[], discountPercent: number = 0): number {
  const subtotal = items.reduce((sum, item) => sum + calculateItemTotal(item), 0);
  return subtotal - (subtotal * discountPercent) / 100;
}

function printReceipt(...items: CartItem[]): void {
  console.log("----- Shopping Cart Receipt -----");
  items.forEach((item) => {
    console.log(`${item.name} x${item.quantity} = Rs.${calculateItemTotal(item)}`);
  });
  console.log("----------------------------------");
}

const cart: CartItem[] = [
  { name: "Notebook", price: 45, quantity: 3 },
  { name: "Pen", price: 10, quantity: 5 },
  { name: "Backpack", price: 1200, quantity: 1 },
];

printReceipt(...cart);
console.log("Total (no discount):", calculateCartTotal(cart));
console.log("Total (10% discount):", calculateCartTotal(cart, 10));
