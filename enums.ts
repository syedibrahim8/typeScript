// TypeScript Enums

// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric.

// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
// currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:

// Example
enum CardinalDirections {
  North1 = 1,
  East1,
  South1,
  West1
}
// logs 1
console.log(CardinalDirections.North1);
// logs 4
console.log(CardinalDirections.West1);

// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value.

// Then the values will not be incremented automatically:

// Example
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);



// String Enums

enum CardinalDirections {
  North2 = 'North',
  East2 = "East",
  South2 = "South",
  West2 = "West"
};
// logs "North"
console.log(CardinalDirections.North2);
// logs "West"
console.log(CardinalDirections.West2);