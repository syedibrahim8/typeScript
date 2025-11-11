// TypeScript Explicit Types and Inference

// Type Annotation and Inference
/*
TypeScript offers two ways to work with types:

1. Explicit typing: you explicitly declare the type of a variable
2. Type Inference: TypeScript automatically determines the type based on the assigned value
*/

// when to use each approach

/*
Use explicit types for:
Funcion parameters and return types
Object literals
When the initial value might not be the final type
*/

/*
Use type inference for:
Simple variable declerations with immediate assignment
When the type is obvious from the context
*/

// Explicit Type Annotations
// String
const greeting: string = "Hello, TypeScript!";

// Number
const userCount: number = 42;

// Boolean
const isLoading: boolean = true;

// Array
let fname: string[]=["Syed","Ibrahim","Ali"]