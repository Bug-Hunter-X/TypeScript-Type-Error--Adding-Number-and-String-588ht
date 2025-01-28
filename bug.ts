function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // This works fine
console.log(result1); // Output: 8

let result2 = subtract(10, 5); // This works fine
console.log(result2); // Output: 5

let result3 = add(5, "3"); // Type Error
console.log(result3);