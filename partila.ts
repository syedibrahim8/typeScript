// Partial
// Partial changes all the properties in an object to be optional.

// ExampleGet your own TypeScript Server
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;



// Required
// Required changes all the properties in an object to be required.

// Example
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};

// Record
// Record is a shortcut to defining an object type with a specific key type and value type.

// Example
const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};


// Omit
// Omit removes keys from an object type.

// Example
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob'
  // `Omit` has removed age and location from the type and they can't be defined here
};

// Pick
// Pick removes all but the specified keys from an object type.

// Example
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob1: Pick<Person, 'name'> = {
  name: 'Bob'
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};


// Exclude
// Exclude removes types from a union.

// Example
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.


// ReturnType
// ReturnType extracts the return type of a function type.

// Example
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

// Parameters
// Parameters extracts the parameter types of a function type as an array.

// Example
type PointPrinter = (p: { x: number; y: number; }) => void;
const point1: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};


interface Person {
  name: string;
  age: number;
}
const person: Readonly<Person> = {
  name: "Dylan",
  age: 35,
};
// person.name = 'Israel'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.