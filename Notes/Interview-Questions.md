# TypeScript Interview Questions (Self-Prep Notes)

Questions I collected and answered in my own words while learning, for interview prep.

**1. What is TypeScript and why use it over JavaScript?**
TypeScript is a superset of JavaScript that adds static typing. It catches type-related bugs at compile time instead of at runtime, and gives better autocomplete/tooling support in editors, which is especially useful in larger codebases with multiple developers.

**2. What's the difference between `interface` and `type`?**
Both can describe object shapes. `interface` supports declaration merging (defining the same interface twice adds to it) and is generally used for objects that might be extended. `type` is more flexible and can represent unions, tuples, and primitives, not just objects.

**3. What is the difference between `any` and `unknown`?**
`any` disables type checking entirely. `unknown` also accepts any value, but forces you to narrow the type (e.g. with `typeof`) before you can use type-specific properties or methods, which makes it much safer.

**4. What are generics and why are they useful?**
Generics let you write reusable functions, classes, or interfaces that work with multiple types while still keeping full type safety, instead of using `any` or duplicating code for each type.

**5. What is type narrowing?**
Narrowing is how TypeScript figures out which specific type a value has when it starts out as a union. Common ways: `typeof` checks, `in` checks, and discriminated unions with a shared literal property like `kind`.

**6. What does `keyof` do?**
`keyof T` produces a union of the property names of type `T`. It's often combined with generics to write functions that safely access or update object properties without hardcoding key names.

**7. What's the difference between `Pick` and `Omit`?**
`Pick<T, K>` creates a type with only the specified keys from `T`. `Omit<T, K>` creates a type with all keys from `T` except the specified ones. They're opposite approaches to the same problem — narrowing down a type.

**8. What is a discriminated union?**
A union of object types that all share a common literal property (often called `kind` or `type`), which TypeScript uses to narrow the exact type in a switch or if/else block.

**9. Why would you use `Partial<T>` in an update function?**
Because an update usually only changes a few fields, not the whole object. `Partial<T>` makes all properties of `T` optional, which matches this use case exactly.

**10. What are modules and why prefer them over namespaces?**
Modules use `export`/`import` to share code between files, and are the modern ES standard supported by all major tools and bundlers. Namespaces were TypeScript's earlier solution and are mostly seen in legacy code now.
