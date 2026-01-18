// console.log just prints the result and doesn't return anything
function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
}

// here the function have a return value
function addTwoNum(num1, num2){
    return num1 + num2
}
const result = addTwoNumbers(3,5)
console.log("result: ", result);   // result:  undefined ; because function is not returning anything


function loginUserMessage(username = "user"){
    if(username == undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("candy"));


// when total not known beforehand
// here ... = rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500))


const user ={
    username: "candy",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "alice",
    price: 9999
})



const myNewArray = [100, 200, 800, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 477, 9848]));



// scopes 

let a = 10  // global scope 
if (true){
    let a = 50 // local/block scope 
}


function one(){
    const username = "candy"

    function two(){
        const website = "yt"
        console.log(username);
    }
    // console.log(website); // error, not defined

    two()
}
one()


// mini hoisting

addone(5)
function addone(num){
    return num + 1
}

// addtwo(5)  // error; Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2
}
addtwo(5)  