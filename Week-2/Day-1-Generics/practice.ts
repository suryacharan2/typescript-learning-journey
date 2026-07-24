// practice.ts
// What this file demonstrates: practice exercises with generics
// Concepts used: generic functions, generic interfaces, constraints, multiple type parameters

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed results for each exercise

// Exercise 1 (easy): generic function that returns the last item of an array
function getLastItem<T>(items: T[]): T {
  return items[items.length - 1];
}
console.log(getLastItem<number>([10, 20, 30]));
console.log(getLastItem<string>(["a", "b", "c"]));

// Exercise 2 (easy): generic interface for a simple key-value pair
interface KeyValue<T> {
  key: string;
  value: T;
}
let setting: KeyValue<boolean> = { key: "darkMode", value: true };
console.log(setting);

// Exercise 3 (medium): generic function with a constraint requiring an "id" field
interface HasId {
  id: number;
}
function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find((item) => item.id === id);
}
interface Product {
  id: number;
  name: string;
}
const products: Product[] = [
  { id: 1, name: "Mouse" },
  { id: 2, name: "Keyboard" },
];
console.log(findById(products, 2));

// Exercise 4 (medium): generic function to swap two values
function swap<A, B>(pair: [A, B]): [B, A] {
  return [pair[1], pair[0]];
}
console.log(swap<string, number>(["age", 25]));

// Exercise 5 (harder): generic stack implementation
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log("Top of stack:", numberStack.peek());
console.log("Popped:", numberStack.pop());

// Exercise 6 (harder): generic function that filters an array based on a predicate
function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}
const evenNumbers = filterItems([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0);
console.log("Even numbers:", evenNumbers);
