function sayMyname(){
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("u");
    console.log("r");
}
// sayMyname()

// function addTwoNumbers(number1, number2){
//         console.log(number1 + number2);
// }
// addTwoNumbers(3,666)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("ankur");  not reachable

    return number1 + number2
}

const result = addTwoNumbers(3, 666)
// console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("ankur"))

function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please enter a name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ankur"))
// console.log(loginUserMessage());

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please enter a name");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("ankur"));