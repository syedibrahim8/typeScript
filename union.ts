// TypeScript Union Types

// Union | (OR)
// Using the | we are saying our parameter is a string or number:

// ExampleGet your own TypeScript Server
function printStatusCode1(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode1(404);
printStatusCode1('404');


// Union Type Errors
// Note: you need to know what your type is when union types are being used to avoid type errors:

// Example
function printStatusCode(code: string | number) {
//   console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
}
