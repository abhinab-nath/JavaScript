// JS Date objects represent a single moment of time in a platform-independent format.
// Data object encapsulate an integral number that represent milliseconds since the beginning of January 1, 1970, UTC

let myDate = new Date()

console.log(typeof (myDate)); // object

console.log(myDate);  // 2026-01-02T06:23:08.699Z

console.log(myDate.toString());  // Fri Jan 02 2026 11:53:46 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());  // Fri Jan 02 2026

console.log(myDate.toLocaleString()); // 2/1/2026, 11:56:17 am


// creating dates

let myCreatedDate = new Date(2025, 0, 24); // months in js starts from -> 0
console.log(myCreatedDate.toDateString()); // Fri Jan 24 2025

let myCreatedDate2 = new Date(2025, 0, 24, 5, 3); 
console.log(myCreatedDate2.toLocaleString()); // 24/1/2025, 5:03:00 am

let myCreatedDate3 = new Date("01-15-2025") // 15/1/2025, 12:00:00 am
console.log(myCreatedDate3.toLocaleString());


// time-stamps
let myTimeStamp = Date.now()
console.log(myTimeStamp);  // 1767337643191 (milliseconds)
console.log(myCreatedDate.getTime()); //1737657000000

// converting in seconds
console.log(Math.floor(Date.now()/1000)); // 1767337835


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // 0 -> jan ; +1 = jan
console.log(newDate.getDay()); // 5 -> fri

console.log(`the day is ${newDate.getDay()} and the time is ${newDate.getTime()}`)

// custom format

let n = newDate.toLocaleString('default',{
    weekday:"long",
    
})
console.log(n); // Friday