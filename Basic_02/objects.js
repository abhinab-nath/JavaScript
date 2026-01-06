// singleton - if made though constructor, Object.create


// object literals

const mySym = Symbol("key")  // creating symbol

const jsUser = {
    name: "candy",
    "full name": "candid-samurai",  // string
    [mySym] : "myKey1",  // accessing symbol, use []
    age: 20,
    location: "Delhi",
    email: "candy@gmail.com",
    isLoggedIn: false,
    lastLogin: ["mon","sun"]
}

// two ways to access
console.log(jsUser.email);      // 1
console.log(jsUser["email"]);   // 2  

console.log(jsUser["full name"]); // now there's no way to access the string with the . method, so we have to use method 2.

console.log(jsUser[mySym]);


// changing and locking values

jsUser.email = "abhi@gmail.com"
// freeze
// Object.freeze(jsUser)
jsUser.email = "hellloowoowow@gmail.com"
console.log(jsUser);


// using functions 

jsUser.greeting = function(){
    console.log(`hellowww user, ${this.name}`);
}
console.log(jsUser.greeting);  // [Function (anonymous)]
console.log(jsUser.greeting());