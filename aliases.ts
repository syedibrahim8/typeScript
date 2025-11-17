// TypeScript Type Aliases and Interfaces

// Type Aliases

// Type Aliases allow defining types with a custom name (an Alias).

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};




// Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.

// Example
interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};


// Type vs Interface: Key Differences
// Extending: Both can be extended, but interfaces support declaration merging.
// Unions/Intersections: Only type aliases support union and intersection types.
// Implements: Classes can implement either.
// Recommendation: Use interface for objects, type for everything else.
// Best Practices:

// Use interface for defining object shapes and public APIs.
// Use type for unions, intersections, and primitives.
// Favor composition over inheritance for types.
// Document your types and interfaces for clarity.
// Common Pitfalls:

// Using type when you need declaration merging (use interface).
// Overcomplicating types—keep them simple and focused.
// Forgetting to update types/interfaces as code evolves.


// Extending Interfaces
// Interfaces can extend each other's definition.

// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

// Example
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};
