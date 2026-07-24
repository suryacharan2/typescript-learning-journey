// assignment.ts
// What this file demonstrates: a small assignment using generics for an Inventory system
// Concepts used: generic interfaces, generic functions, constraints

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed inventory operations

// Assignment: build a small generic Inventory manager that can hold any item type with an id.

interface HasId {
  id: number;
}
class Inventory<T extends HasId> {
  private items: T[] = [];
 addItem(item: T): void {
    this.items.push(item);
  }
   removeItem(id: number): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return false;
    this.items.splice(index, 1);
    return true;
  }

  findItem(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  getAllItems(): T[] {
    return this.items;
  }
}

interface Vehicle {
  id: number;
  model: string;
  year: number;
}

const vehicleInventory = new Inventory<Vehicle>();
vehicleInventory.addItem({ id: 1, model: "Sedan X1", year: 2022 });
vehicleInventory.addItem({ id: 2, model: "SUV Max", year: 2023 });
vehicleInventory.addItem({ id: 3, model: "Hatchback Mini", year: 2021 });

console.log("All vehicles:", vehicleInventory.getAllItems());
console.log("Found vehicle:", vehicleInventory.findItem(2));

vehicleInventory.removeItem(1);
console.log("After removal:", vehicleInventory.getAllItems());
