// practice.ts
// What this file demonstrates: practice exercises with utility types
// Concepts used: Partial, Required, Readonly, Pick, Omit, Record

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed results for each exercise

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

// Exercise 1 (easy): Partial for updating a product's price
function updatePrice(product: Product, updates: Partial<Product>): Product {
  return { ...product, ...updates };
}
const product1: Product = { id: 1, name: "Chair", price: 1500 };
console.log(updatePrice(product1, { price: 1350 }));

// Exercise 2 (easy): Readonly for a locked configuration object
interface Config {
  apiUrl: string;
  timeout: number;
}
const appConfig: Readonly<Config> = { apiUrl: "https://api.example.com", timeout: 5000 };
console.log(appConfig);

// Exercise 3 (medium): Pick to create a product summary
type ProductSummary = Pick<Product, "id" | "name">;
const summary: ProductSummary = { id: 2, name: "Table" };
console.log(summary);

// Exercise 4 (medium): Omit to remove the description field
type ProductWithoutDescription = Omit<Product, "description">;
const noDescProduct: ProductWithoutDescription = { id: 3, name: "Lamp", price: 800 };
console.log(noDescProduct);

// Exercise 5 (harder): Record for mapping order status to a display message
type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";
const statusMessages: Record<OrderStatus, string> = {
  pending: "Your order is being processed",
  shipped: "Your order is on the way",
  delivered: "Your order has been delivered",
  cancelled: "Your order was cancelled",
};
console.log(statusMessages.shipped);

// Exercise 6 (harder): Required to enforce all optional fields for a final checkout step
type FinalProduct = Required<Product>;
const finalProduct: FinalProduct = {
  id: 4,
  name: "Sofa",
  price: 22000,
  description: "A 3-seater fabric sofa",
};
console.log(finalProduct);
