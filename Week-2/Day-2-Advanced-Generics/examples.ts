// examples.ts
// What this file demonstrates: advanced generics
// Concepts used: default generic types, keyof with generics, generic classes, generics with unions

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed values demonstrating advanced generic usage

// Default generic type
interface ApiResponse<T = unknown> {
  data: T;
  success: boolean;
}
let response1: ApiResponse<string> = { data: "OK", success: true };
let response2: ApiResponse = { data: "anything", success: false }; // uses default (unknown)
console.log(response1, response2);

// keyof with generics - safely access a property by key
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: "Tarun", age: 28, isAdmin: false };
console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));
// getProperty(user, "email"); // this would be a compile error - "email" isn't a key of user

// Generic class with a default type parameter for the error type
class Result<T, E = string> {
  constructor(
    public success: boolean,
    public data?: T,
    public error?: E
  ) {}
}

function fetchUser(id: number): Result<{ name: string }> {
  if (id === 1) {
    return new Result(true, { name: "Aditi" });
  }
  return new Result<{ name: string }>(false, undefined, "User not found");
}

const result = fetchUser(1);
if (result.success) {
  console.log("Fetched user:", result.data);
} else {
  console.log("Error:", result.error);
}

// Generic function combined with a union type
function wrapValue<T>(value: T): { kind: "value"; value: T } | { kind: "empty" } {
  if (value === null || value === undefined) {
    return { kind: "empty" };
  }
  return { kind: "value", value };
}
console.log(wrapValue<number>(10));
console.log(wrapValue<string | undefined>(undefined));
