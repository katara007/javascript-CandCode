// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outSideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId= Symbol('123')

// console.log(id === anotherId);


// Javascript is Dynamically Typed language

// Reference (non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = { 
    name:"ankur",
    age:32,
}
const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof myObj);



// ++++++++++++++++++++++++++++++++++++  Memory  +++++++++++++++++++++++++++++++++++++++

// Stack (Primitive-gives copy of value), Heap(non-Primitive-gives real value)

let myYoutubename = "ankurkatara"

let myName = myYoutubename
myName = "Madhav"
console.log(myName);
console.log(myYoutubename);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ankur@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

