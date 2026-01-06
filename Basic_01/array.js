// in js arrays are re-sizeable, and contains a mix of different data types.

const myArray = [1, 24, 5, 6, 77]  // index start from 0

// js array-copy operations create shallow copies.
// a shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made.

const myarr = new Array(1,2,3,4,5)
//console.log(myarr[0]);


// ++++++++++ ARRAY METHODS ++++++++++++

myArray.push(69) // adds element at last
myArray.pop()    // deletes last element

myArray.unshift(90)  // adds element at first
myArray.shift()      // removes element from first

console.log(myArray.includes(9)); // false
console.log(myArray.indexOf(9));  // -1


//join
const newArray = myArray.join() // binds and converts the array into string

console.log(newArray); // 1,24,5,6,77
console.log(typeof(newArray)); // string
console.log(myArray); //  [ 1, 24, 5, 6, 77 ]


// ************ slice, splice ************

console.log("original array: ", myArray);  // [ 1, 24, 5, 6, 77 ]

const mya1 = myArray.slice(1,3);
console.log(mya1);                        // slice: [ 24, 5 ]

console.log("after slice: ", myArray);    // [ 1, 24, 5, 6, 77 ]

const mya2 = myArray.splice(1,3);
console.log(mya2);                        // splice: [ 24, 5, 6 ]

console.log("after splice: ", myArray);   //  [ 1, 77 ]



// part 2

const marvel = ["thor", "ironman", "captain"]
const dc = ["batman", "superman", "flash"]

// ****** push ****** 
// adds in existing array, whole array as an element 

marvel.push(dc)
console.log(marvel);  
// new marvel = 
// [ 'thor', 'ironman', 'captain', [ 'batman', 'superman', 'flash' ] ]
// now marvel have 4 elements
console.log(marvel[3][1]); // accessing superman


// ****** concat ****** 
// creates a new array, which stores elements of both the array

const allHeroes = marvel.concat(dc)
console.log(allHeroes);  
// [ 'thor', 'ironman', 'captain', 'batman', 'superman', 'flash' ]


// ****** spread operator ******
const newHeroes = [...marvel, ...dc]
console.log(newHeroes);
// [ 'thor', 'ironman', 'captain', 'batman', 'superman', 'flash' ]


// ****** flat ******
// removes sub-arrays inside and array.
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const newAnotherArray = anotherArray.flat(Infinity)
console.log(newAnotherArray); 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



// ****** converting to array ******

console.log(Array.isArray("helloww"));  // false

console.log(Array.from("helloww")); // ['h', 'e', 'l', 'l', 'o', 'w', 'w']

console.log(Array.from({greet: "helloww"})); // []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]
