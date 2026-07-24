// examples.ts
// What this file demonstrates: built-in utility types
// Concepts used: Partial, Required, Readonly, Pick, Omit, Record

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed objects showing each utility type in use

interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

// Partial - makes all properties optional, useful for update functions
function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}
const user1: User = { id: 1, name: "Simran", email: "simran@example.com" };
const updatedUser = updateUser(user1, { name: "Simran Kaur" });
console.log(updatedUser);

// Required - makes all properties mandatory, even ones that were optional
type CompleteUser = Required<User>;
const completeUser: CompleteUser = {
  id: 2,
  name: "Naveen",
  email: "naveen@example.com",
  age: 30, // now required since we used Required<User>
};
console.log(completeUser);

// Readonly - makes all properties immutable after creation
const lockedUser: Readonly<User> = { id: 3, name: "Priyanka", email: "priyanka@example.com" };
console.log(lockedUser);
// lockedUser.name = "Changed"; // this would cause a compile error

// Pick - creates a type with only the specified properties
type UserPreview = Pick<User, "id" | "name">;
const preview: UserPreview = { id: 4, name: "Deepak" };
console.log(preview);

// Omit - creates a type with all properties except the specified ones
type UserWithoutEmail = Omit<User, "email">;
const noEmailUser: UserWithoutEmail = { id: 5, name: "Tanya" };
console.log(noEmailUser);

// Record - builds an object type with specific keys and value types
type Role = "admin" | "editor" | "viewer";
const roleDescriptions: Record<Role, string> = {
  admin: "Full access to all resources",
  editor: "Can edit but not delete",
  viewer: "Can only view content",
};
console.log(roleDescriptions);
