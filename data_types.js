"use strict"; // treat all JS code as newer version

// alert(3 + 3); // not possible in nodejs [ReferenceError]

let name = "candy"
let age = 18
let isLoggedIn = true

// PRIMITIVE DATA TYPES (immutable):-

// Max exact integer => −(2^53 − 1) to (2^53 − 1) (range)
// Number.MAX_SAFE_INTEGER  // 9007199254740991
// Number.MIN_SAFE_INTEGER  // -9007199254740991
// when numbers are bigger than this we use BigInt

// string => " "
// boolean => true / false
// null => standalone value [type = object]
// undefined => value not assigned yet [type = undefined]
// symbol => unique


// NON-PRIMITIVE DATA TYPES (mutable):-

// object => key-value pairs
let user = { name: "Candy", age: 20};

// array => stores ordered collection of values
let numbers = [1,2,3,4];

// function => a block of reuseable code
function greet() {
  console.log("Hello");
}


// typeof Operator
typeof 10          // "number"
typeof "hi"        // "string"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"
typeof {}          // "object"
typeof []          // "object"
typeof function(){}// "function"

console.log(typeof age);