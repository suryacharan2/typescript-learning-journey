// practice.ts
// What this file demonstrates: practice exercises with advanced generics
// Concepts used: default generic types, keyof, generic classes, unions with generics

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed results for each exercise

// Exercise 1 (easy): generic function with a default type
function createEmptyList<T = string>(): T[] {
  return [];
}
console.log(createEmptyList<number>());
console.log(createEmptyList()); // defaults to string[]

// Exercise 2 (medium): keyof to safely update an object property
function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return { ...obj, [key]: value };
}
const employee = { name: "Kavya", salary: 50000 };
const updatedEmployee = updateProperty(employee, "salary", 55000);
console.log(updatedEmployee);

// Exercise 3 (medium): generic class for a simple Pair
class Pair<A, B> {
  constructor(public first: A, public second: B) {}

  swap(): Pair<B, A> {
    return new Pair(this.second, this.first);
  }
}
const pair = new Pair<string, number>("score", 95);
console.log(pair.swap());

// Exercise 4 (harder): generic Result-style class for a Movie lookup
class LookupResult<T, E = string> {
  constructor(public found: boolean, public data?: T, public error?: E) {}
}
interface Movie {
  title: string;
  year: number;
}
function findMovie(title: string): LookupResult<Movie> {
  const database: Movie[] = [
    { title: "Interstellar", year: 2014 },
    { title: "Inception", year: 2010 },
  ];
  const movie = database.find((m) => m.title === title);
  return movie
    ? new LookupResult<Movie>(true, movie)
    : new LookupResult<Movie>(false, undefined, "Movie not found");
}
console.log(findMovie("Inception"));
console.log(findMovie("Unknown Movie"));

// Exercise 5 (harder): generic function using keyof to sort objects by a property
function sortByKey<T, K extends keyof T>(items: T[], key: K): T[] {
  return [...items].sort((a, b) => (a[key] > b[key] ? 1 : -1));
}
const moviesToSort: Movie[] = [
  { title: "Zeta", year: 2020 },
  { title: "Alpha", year: 2018 },
];
console.log(sortByKey(moviesToSort, "title"));
