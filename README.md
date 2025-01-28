# TypeScript Type Error: Adding Number and String

This repository demonstrates a common type error in TypeScript that occurs when attempting to perform an arithmetic operation (in this case, addition) with mismatched types – a number and a string.  TypeScript's type system is designed to catch these errors at compile time, preventing runtime exceptions.

The `bug.ts` file shows the error, and `bugSolution.ts` shows how to resolve it.

## How to reproduce

1. Clone this repository.
2. Compile using the TypeScript compiler (tsc).
3. Observe the compiler error highlighting the type mismatch in the `add` function call.