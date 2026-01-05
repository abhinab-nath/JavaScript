// with help of constructor

const User = {} // literal, non-singleton object

const tinderUser = new Object() // cosntructor, singleton object
console.log(tinderUser);  // {}

//
tinderUser.id = "123abc"
tinderUser.name = "lucy"
tinderUser.isloggedin = false

console.log(tinderUser);  // { id: '123abc', name: 'lucy', isloggedin: false }

console.log(Object.keys(tinderUser));      // [ 'id', 'name', 'isloggedin' ]
console.log(Object.values(tinderUser));   // [ '123abc', 'lucy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'lucy' ], [ 'isloggedin', false ] ]

console.log(tinderUser.hasOwnProperty('isloggedin'));  // true



// objects inside object
const regularUser = {
    email: "someone@gmail.com",
    fullname:{
        userfullname:{
            firstname: "firstname",
            lastname: "lastname",
        }
    }
}

console.log(regularUser.fullname.userfullname);


// merging objects

const obj1 = {1:"a", 2:"b"}
const obj2 = {4:"a", 3:"b"}

// method 1
const obj3 = {obj1, obj2}
console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'b', '4': 'a' } }

// method 2
const obj4 = Object.assign({}, obj1, obj2)  // {} = target ; obj1, obj2,.... = source
console.log(obj4);
// { '1': 'a', '2': 'b', '3': 'b', '4': 'a' }

// method 3 : spread method, used most of the time
const obj5 = {...obj1, ...obj2}
console.log(obj5);
// { '1': 'a', '2': 'b', '3': 'b', '4': 'a' }



// 
const user = [
    {
        id: 1,
        email: "hotmail@gmail.com",
    },
    {
        id: 2,
        email: "balls@gmail.com"
    },
    {

    },
]

console.log(user[1].email);
//
