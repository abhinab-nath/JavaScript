const user = {
    username: "candy",
    price: 999,

    welcomeMessage: function(){

        console.log(`${this.username}, welcome to our website`)

        console.log(this); // {username: 'candy', price: 999, welcomeMessage: [Function: welcomeMessage]}
    }

    // this refers to current context

}

user.welcomeMessage()


console.log(this); // in node environment, it returns {}
// in browser , it returns Window



// arrow function

const addnum = (num1, num2) => {
    return num1 + num2
}

const addtwo = (num1, num2) => (num1 + num2)   // implicit return

const userN = (username) => ({username: "candy"})  //object

// {} : use return
// (): don't use return