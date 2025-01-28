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

let result3 = add(5, parseInt("3")); // Fixed: Type Error resolved by parsing the string to a number
console.log(result3); // Output: 8

let result4 = add(5, Number("3")); //Alternative fix using Number()
console.log(result4); //Output: 8
//Another solution is using type assertion. However, this is less safe and should be used cautiously.
let result5 = add(5, <number>"3");
console.log(result5); // Output: 8