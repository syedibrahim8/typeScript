// TypeScript Classes

// Members: Types
// The members of a class (properties & methods) are typed using type annotations, similar to variables.

// ExampleGet your own TypeScript Server
class Person {
//   names: string;
}

const person = new Person();
// person.names = "Jane";


// Members: Visibility
// Class members can also be given special modifiers that affect visibility.

// There are three main visibility modifiers in TypeScript.

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below


class Person1 {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person1 = new Person1("Jane");
console.log(person1.getName()); // person.name isn't accessible from outside the class since it's private


// Parameter Properties
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifier to the parameter.

// Example
class Person2 {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person2 = new Person2("Jane");
console.log(person2.getName()); // person.name isn't accessible from outside the class since it's private



// Readonly
// Similar to arrays, the readonly keyword can prevent class members from being changed.

// Example
class Person3 {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at its declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person3 = new Person3("Jane");
console.log(person3.getName());


// Inheritance: Implements
// Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.

// Example
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

// Inheritance: Extends
// Classes can extend each other through the extends keyword.

// A class can only extend one other class.

// Example
interface Shape {
  getArea: () => number;
}

class Rectangle2 implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}


// Override
// When a class extends another class, it can replace the members of the parent class with the same name.

// Newer versions of TypeScript allow explicitly marking this with the override keyword.

// Example
interface Shape {
  getArea: () => number;
}

class Rectangle3 implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square1 extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.

// This is done by using the abstract keyword.

// Members that are left unimplemented also use the abstract keyword.

// Example
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle4 extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

