// TypeScript Basic Generics


// Functions
// Generics with functions help create more general functions that accurately represent the input and return types.

// ExampleGet your own TypeScript Server
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]
