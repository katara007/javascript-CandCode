// let a =10  // {}=> this is called scope like in function,if, else etc. objects not included.
// const b = 20
// var c = 30

let a = 300
if (true){
    let a =10  //under if=> all code is BLock Scope and outer one is Global Scope
    const b = 20 //code in Block Scope cannot be used in Global Scope
    // console.log(`inner ${a}`);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "ankur"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    
    two()
}
// one()

if (true) {
    const username = "katara"

    if (username === "katara") {
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++ Intresting +++++++++++++++++++

console.log(addOne(5));
function addOne(num) {
    return num + 1
}


console.log(addTwo(5)); // you cannot access before its decelaration if this type of syntex
const addTwo = function (num) {
    return num + 2
}

