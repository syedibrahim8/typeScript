// TypeScript Tuples 

// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// initialize with incorrect types
// ourTuple = [true, 5, 'Coding God was here']; // Error: Type 'boolean' is not assignable to type 'number'.

// initialize with incorrect length
// ourTuple = [5, false]; // Error: Source has 2 element(s) but target requires 3.

// Accessing Elements
let firstElement = ourTuple[0]; // inferred as number
let secondElement = ourTuple[1]; // inferred as boolean
let thirdElement = ourTuple[2]; // inferred as string

// Modifying Elements
ourTuple[0] = 10; // no error
// ourTuple[1] = 'Hello'; // Error: Type 'string' is not assignable to type 'boolean'.

// Tuples with Optional and Rest Elements
let anotherTuple: [string, number?, ...boolean[]];

// valid initializations
anotherTuple = ['Hello'];
anotherTuple = ['Hello', 42];
anotherTuple = ['Hello', 42, true, false, true];

// invalid initializations
// anotherTuple = [42]; // Error: Type 'number' is not assignable to type 'string'.
// anotherTuple = ['Hello', 'World']; // Error: Type 'string' is not assignable to type 'number | undefined'.

// Destructuring Tuples
let [greeting, count, ...flags] = anotherTuple;
console.log(greeting); // 'Hello'
console.log(count);    // 42 or undefined
console.log(flags);    // array of booleans 

// Tuples in Functions
function getTuple(): [number, string] {
  return [1, 'TypeScript'];
}

let [num, str] = getTuple();
console.log(num); // 1
console.log(str); // 'TypeScript'

// Conclusion
// Tuples are a powerful feature in TypeScript that allow you to define arrays with fixed sizes and types, providing better type safety and clarity in your code.   
