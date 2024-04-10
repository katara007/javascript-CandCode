// If
const isUserloggedIn = true
const temperature = 41

// if ( 2 == "2") {
//     console.log("Executed");
// }
if ( 2 === "2") {
    // console.log("Executed");
}

// >, <, >=, <=, ==, !=, ===

// if ( temperature < 50) {
//     console.log("Less than 50");
// }
// console.log("greater than 50");

// if ( temperature < 50) {
//     console.log("Less than 50");
// } else {
//     console.log("greater than 50");
// }
// console.log("Execute");


const score = 200

// if (score > 100) {
//     const power = "fly" // cannot use var becoz it is global scope
//     console.log(`user power: ${power}`);
// }

const balance = 1000
// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less then");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user log in");
}