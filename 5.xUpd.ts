// TypeScript 5.x Updates
// TypeScript is actively maintained and updated by Microsoft.

// In version 5.x a lot of utility and quality of life updates were made.

// This chapter covers the most popular updates to allow stricter and more flexible type safety.

// As a reminder these features will only be available in 5.x+

// Template Literal Types
// Template Literal Types now allows us to create more precise types using template literals.

// We can define custom types that depend on the actual values of strings at compile time.

// ExampleGet your own TypeScript Server
// type Color = "red" | "green" | "blue";
// type HexColor<T extends Color> = `#${string}`;

// // Usage:
// let myColor: HexColor<"blue"> = "#0000FF";
// REMOVE ADS

// Index Signature Labels
// Index Signature Labels allows us to label index signatures using computed property names.

// It helps in providing more descriptive type information when working with dynamic objects.

// Example
// type DynamicObject = { [key: `dynamic_${string}`]: string };

// // Usage:
// let obj: DynamicObject = { dynamic_key: "value" };