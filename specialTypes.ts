// TypeScript Special Types
/*
TypeScript includes several special types that have specific behaviors in the type system.

These types are used in various scenarios to handle cases where
the type might not be known in advance or when you need to work with JavaScript primitives in a type-safe way.
*/

// TypeScript Special Types

// Type: any
// The any type is the most flexible type in TypeScript.

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

// Type: unknown
// The unknown type is a type-safe counterpart of any.

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting


// Type: never 
// The never type represents the type of values that never occur.

// 1. Function that never returns
function throwError(message: string): never {
  throw new Error(message);
}
// 2. Exhaustiveness checking with discriminated unions
type Circle = { kind: 'circle'; radius: number };
type Square = { kind: 'square'; sideLength: number };
type Triangle = { kind: 'triangle'; base: number; height: number };

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    case 'triangle':
      return 0.5 * shape.base * shape.height;
    default:
      // TypeScript knows this should never happen
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
// 3. Basic never type (throws error when assigned)
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.


// Type: undefined & null
// In TypeScript, both undefined and null have their own types, just like string or number

let y: undefined = undefined;
let z: null = null;

// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like a number.

// Optional Parameters and Properties
// Optional parameter (implicitly `string | undefined`)
function greet(name?: string) {
  return `Hello, ${name || 'stranger'}`;
}

// Optional property in an interface
interface User {
  name: string;
  age?: number; }// Same as `number | undefined` }
// Nullish Coalescing and Optional Chaining
// Nullish coalescing (??) - only uses default if value is null or undefined
const input = undefined;
const value = input ?? 'default';

// Optional chaining (?.) - safely access nested properties
// const street = user?.address?.street;



