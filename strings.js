const name = "candy"
const age = 99

// console.log(name + count + "value");

//String Interpolation: way to insert variables/expressions directly inside a string.
console.log(`Hellow my name is ${name} and my age is ${age}`);


const gameName = new String('Candid-Samurai') //new String() creates a String object, not a normal string.

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("S")); // if we use 's' insted of 'S', gives => -1

const newString = gameName.substring(0,4) //n-1, 4 not included, index starts from 0; doesn't take -ve 
console.log(newString);


// slice(start,end)
// Index:  0 1 2 3 4 5 6 7 8 9 10 11 12
// Char:   C a n d i d S a m u  r  a  i
//     -13 -12 -11 ..................-1

const anotherString = gameName.slice(-11,4) // nd, -11=n, 4=i(but not included) so d(3)
console.log(anotherString);


//trim
const newStringOne = "  candy   "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace
const url = "https://candidsamurai.com/candy%20samurai"
console.log(url.replace('%20', '--'));

//includes
console.log(url.includes('abhi')); // false

//split
console.log(gameName.split('-')); //returns an array: [ 'Candid', 'Samurai' ]