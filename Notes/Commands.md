# All Commands Used (Full Reference)

Consolidated list of every command used across both weeks.

| Command | Explanation |
|---------|-------------|
| `npm install -g typescript` | Installs the TypeScript compiler globally |
| `tsc --init` | Generates a default `tsconfig.json` |
| `tsc filename.ts` | Compiles a single file |
| `tsc` | Compiles the whole project using `tsconfig.json` |
| `tsc --watch` | Recompiles automatically on file changes |
| `tsc --noEmit` | Type-checks without producing output files |
| `tsc --strict` | Enables all strict type-checking options |
| `tsc --noImplicitAny` | Errors when a type would silently default to `any` |
| `tsc --strictNullChecks` | Requires explicit handling of `null`/`undefined` |
| `tsc --strictFunctionTypes` | Stricter checking of function type compatibility |
| `tsc --declaration` | Generates `.d.ts` declaration files |
| `tsc --module commonjs` | Compiles modules to CommonJS (used by Node.js) |
| `tsc --module esnext` | Compiles modules to native ES module syntax |
| `npm install -g ts-node` | Installs ts-node to run `.ts` files directly |
| `npx ts-node filename.ts` | Runs a TypeScript file without a separate compile step |
