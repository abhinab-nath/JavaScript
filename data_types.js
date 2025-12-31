"use strict"; // treat all JS code as newer version

// alert(3 + 3); // not possible in nodejs [ReferenceError]

let name = "candy"
let age = 18
let isLoggedIn = true

// ---------- PRIMITIVE DATA TYPES (immutable) ---------- //
/* 7 types: string, number, boolean, null, undefined, symbol, BigInt

1. Max exact integer => −(2^53 − 1) to (2^53 − 1) (range)
Number.MAX_SAFE_INTEGER  // 9007199254740991
Number.MIN_SAFE_INTEGER  // -9007199254740991
2. when numbers are bigger than this we use BigInt
const score = 100

3. string => " "

4. boolean => true / false
const userLoggedIn = false

5. null => standalone value [type = object]
const outsideTemp = null

6. undefined => value not assigned yet [type = undefined]
let userEmail;

7. symbol => unique
const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId);   //false, they look same but different

*/


// --------- NON-PRIMITIVE DATA TYPES (mutable) / Reference --------- //
// array, objects, functions

// object => key-value pairs
let user = {
  name: "Candy", 
  age: 20
};

// array => stores ordered collection of values
let numbers = [1,2,3,4];

// function => a block of reuseable code
function greet() {
  console.log("Hello");
}



// ************* typeof Operator *************** //

typeof 10          // "number"
typeof "hi"        // "string"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"
typeof {}          // "object"
typeof []          // "object"
typeof function(){}// "function"

console.log(typeof age);



// ********* Memory ************ //

// Stack (primitive) => copy of the data, doesn't change original value
// Heap (non-primitive) => reference, updates or changes original value

let myName = "candy"
let anotherName = myName
anotherName = "samurai"

console.log(myName);
console.log(anotherName);

//heap

let userOne = {
  email: "abhi@gmail.com",
  upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "candidsamurai@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);