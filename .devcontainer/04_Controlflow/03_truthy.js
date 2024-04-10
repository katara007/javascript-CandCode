const userEmail= "has@ankur.ai" // asumed as truthy 
if (userEmail) {
    // console.log("got user email");
} else {
    console.log("don't have email");
}

// falsy values 
// false, o, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", "  ", [], {}, function(){},

// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("empty object");
// }

// Nullish Coalescing Operator (??) - null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 13

console.log(val1);


// terniary operator

// condition ? true : false

const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80")
