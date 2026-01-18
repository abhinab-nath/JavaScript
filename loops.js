// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

//console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break   // stops execution
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue   // skips 5 and continues
    }
   console.log(`Value of i is ${index}`);
    
}



// while loop

let index = 0

while (index <= 10){
    console.log(`value of index is ${index}`);
    index = index + 2
}


// do-while loop

let score = 1

do{
    console.log(`score is ${score}`);
    score++ 
}while(score <= 10);



// for-of 

const arr = [1,2,3,4,5]

for (const num of arr){
    console.log(num);
}

const greetings = "hellow world"
for(const greet of greetings){
    if(greet == " "){
        continue
    }else{
        console.log(`Each char is ${greet} `)
    }
}



// for-in 
// used to iterate objects

const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObj){
    console.log(key);
    console.log(myObj[key]);
}



// for-each 

const coding = ["js","ruby","java","python","cpp"]

coding.forEach( function (item){
    console.log(item);
})


coding.forEach( (item) => {
    console.log(item);
})


function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


// for-each doesn't return anything
const values = coding.forEach( (item) => {
    console.log(item); // undefined
    return item       // undefined
})



coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )



