// TypeScript Object Types

const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

// Type Inference
// TypeScript can infer the types of properties based on their values.

// Example
const car1 = {
  type: "Toyota",
};
car1.type = "Ford"; // no error
// car1.type = 2; // Error: Type 'number' is not assignable to type 'string'.

// Index Signatures
// Index signatures can be used for objects without a defined list of properties.

// Example
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.