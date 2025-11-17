// TypeScript Casting

// Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

// ExampleGet your own TypeScript Server
let x: unknown = 'hello';
console.log((x as string).length);


// Casting with <>
// Using <> works the same as casting with as.

// Example
let x1: unknown = 'hello';
console.log((<string>x1).length);

// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

// Example
let x2 = 'hello';
// console.log(((x2 as unknown) as number).length); // x is not actually a number so this will return undefined