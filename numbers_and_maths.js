score = 400

const balance = new Number(100)
console.log(balance);   // [Number: 100]

console.log(balance.toString().length); //3

//toFixed
console.log(balance.toFixed(2)); // 100.00 ; toFixed(1) then 100.0


//toPrecision
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // 124
// if toPrecision(4) then 123.9 ; otherNumber = 1123.8966,and precision value is 3, then = 1.12e+3


//toLocaleString
const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 10,00,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// MAX / MIN value, safe int value

let max_num = Number.MAX_VALUE;  // 1.7976931348623157e+308
let min_num = Number.MIN_VALUE;  // 5e-324                 

let max_safe = Number.MAX_SAFE_INTEGER; // 9007199254740991
let min_safe = Number.MIN_SAFE_INTEGER; // -9007199254740991 

console.table(['max/min value:',max_num, min_num ,'safe int:', max_safe, min_safe]);



// ***************** MATHS ******************* //

console.log(Math);  // Object [Math] {}

//absoulute value
console.log(Math.abs(-4)); // 4, negative -> positive

//round
console.log(Math.round(4.6)); // 5

// ceil, floor
console.log(Math.ceil(4.2)); // 5, top value
console.log(Math.floor(4.9)); // 4, lowest value

// max, min
console.log(Math.min(3,5,6,7,-8,0)); // -8
console.log(Math.max(3,5,6,7,-8,0)); // 7

// random
console.log(Math.random()); // gives values btw 0 and 1

console.log((Math.random() * 10) + 1); // +1 ensures 0 doesn't occur

// generating a random no. btw two no.s
const min = 10
const max = 20 
console.log(Math.floor(Math.random() * (max - min + 1 )) + min); 
