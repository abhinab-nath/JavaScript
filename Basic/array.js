// in js arrays are re-sizeable, and contains a mix of different data types.

const myArray = [1, 24, 5, 6, 77]  // index start from 0

// js array-copy operations create shallow copies.
// a shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made.

const myarr = new Array(1,2,3,4,5)
//console.log(myarr[0]);


// ARRAY METHODS

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


// slice, splice

console.log("original array: ", myArray);  // [ 1, 24, 5, 6, 77 ]

const mya1 = myArray.slice(1,3);
console.log(mya1);                        // slice: [ 24, 5 ]

console.log("after slice: ", myArray);    // [ 1, 24, 5, 6, 77 ]

const mya2 = myArray.splice(1,3);
console.log(mya2);                        // splice: [ 24, 5, 6 ]

console.log("after splice: ", myArray);   //  [ 1, 77 ]