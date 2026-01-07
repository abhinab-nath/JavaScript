// Immediately Invoked Function Expressions (IIFE)

// function that executes immediately
// to reduce the problem caused by global scope pollution , IIFE is used

// (function)(execution)

(function fun(){  // named IIFE
    console.log(`DB connected`);
})();

// if ( ; ) not used, it will throw error in the next function, always use ; if writing two functions 

( (name) => {
    console.log(`db connected 2 ${name}`);
})('candy')

console.log("hellow");