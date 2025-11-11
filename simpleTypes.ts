/*
The most types are called primitives

These types form the building blocks of more complex types in your applications.

TypeScript includes all JavaScript primitives plus additional type features.

Here are the five primitive types you'll use most often
*/

// Boolean
// represents true/false values
// used for flags, toggles, and conditions

//
let isSleeping : boolean = true;
let isAlive : boolean = false;

// Number
// represents both integer and floating point numbers
// TypeScript uses the same number type for a numeric values

let decimal : number = 6;
let binary : number = 0b10110;
let hex : number = 0xf00d;
let octal : number = 0o744;
let float : number = 3.14;

// String
// represents text data
// can use quotes('), double qoutes(""), or backticks(`) for template literals.

let colors: string = "blue";
let fullname: string = 'Syed';
let age : number = 20;
let sentence : string = `Hello my name is ${fullname} and my age is ${age}`
console.log(sentence);

// BigInt
//Represents whole numbers larger than 253 - 1.
let bigNumber : bigint = 90767887654323n;

// Symbol
// creates unique identifires.
// useful for creating unique property keys and constants.

const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]);