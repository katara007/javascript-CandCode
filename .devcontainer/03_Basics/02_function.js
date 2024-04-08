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

// console.log(loginUserMessage("ankur"))

function calculateCartPrice(num1){
    return num1
}

console.log(ca);

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
// console.log(loginUserMessage("ankur"));

function calculateCartPrice(num1) {
    return num1
}

// console.log(calculateCartPrice(2));

function calculateCartPrice(...num1) {   //(...)=> Rest Operator=> convert the value in Array 
    return num1
}

// console.log(calculateCartPrice(220, 33, 400, 2100));


function calculateCartPrice(val1, val2, ...num1) {   // val1, val2 => took only two values from the input
    return num1
}
// console.log(calculateCartPrice(220, 33, 400, 2100));

const user = {
    username: "Ankur",
    price: 100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username}, and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sandy",
    price: 299
})

const myNewArray = [233, 455, 6, 443]

function getSecondArray(getArray) {
    return getArray[3]
}

console.log(getSecondArray(myNewArray));