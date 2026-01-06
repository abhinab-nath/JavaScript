let score = "33"

console.log (typeof score);
console.log (typeof(score));  // as method

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// " " => false ;  "mercy" => true

let Num = 22
let stringNumber = String(Num)
console.log(stringNumber);
console.log(typeof (stringNumber));


// ********************** Operations ************************* //

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*5); // 10
// console.log(2**3); // 8
// console.log(2/2); // 1
// console.log(2%2); // 0

let str1 = "hellow"
let str2 = " candy"
console.log(str1 + str2);

console.log( "1" + 2 ); // 12
console.log( 1 + "2" ); // 12
console.log( "1" + 2 + 2 ); // 122
console.log( 1 + 2 + "2" ); // 32
// follows ECMA guidelines thats why


console.log( +true ); // 1
console.log( +"" ); // 0


let num1, num2, num3 = 2+2

// Post-fix increment
// let x = 3;
// const y = x++;   // x is 4; y is 3

// Pre-fix increment
// let x = 3;
// const y = ++x;   // x is 4; y is 4