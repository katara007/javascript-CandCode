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