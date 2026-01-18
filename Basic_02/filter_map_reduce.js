// ********** filter **********

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num%2 == 0)
console.log(newNums);  // [ 2, 4, 6, 8, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


let userBooks = books.filter( (bk) => bk.genre === 'History')
console.log(userBooks);

userBooks = books.filter( (bk) => { return bk.publish >= 2000})  // don't forget return inside {scope}
console.log(userBooks);

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);




// ********** map **********

const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = Nums.map( (num) => num + 10)
console.log(newNum);

// chaining

const newNum2 = Nums
                .map( (num) => num*10 )    // 1 -> 10, 2-> 20 ; result passed to the next map
                .map( (num) => num + 1)   // 10 -> 11, 20 -> 21 ; result from above map is used 
                .filter ( (num) => num >= 40)

console.log(newNum2);




// ********** reduce **********

const myNum3 = [1, 2, 3]

const total = myNum3.reduce(function (acc, currrval){
    console.log(`acc: ${acc} and currval: ${currrval}`);
    return acc + currrval
}, 0)
console.log(total);

// using arrow
const myTotal = myNum3.reduce ( (acc,curr) => acc + curr, 0)
console.log(myTotal);

// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const TotalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(TotalPrice);