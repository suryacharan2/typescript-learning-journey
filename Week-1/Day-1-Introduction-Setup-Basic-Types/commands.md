# Commands Used - Day 1

| Command | Explanation |
|---------|-------------|
| `npm install -g typescript` | Installs the TypeScript compiler globally so `tsc` can be used from anywhere |
| `tsc --init` | Generates a default `tsconfig.json` file in the current folder |
| `tsc filename.ts` | Compiles a single `.ts` file into a `.js` file |
| `tsc` | Compiles the whole project based on `tsconfig.json` |
| `npm install -g ts-node` | Installs ts-node, which lets you run `.ts` files directly without a separate compile step |
| `npx ts-node examples.ts` | Runs a TypeScript file directly using ts-node |
| `tsc --watch` | Watches files for changes and recompiles automatically |
