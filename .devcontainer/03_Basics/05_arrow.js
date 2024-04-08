user = {
    username: "ankur",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sandy"
// user.welcomeMessage()

// console.log(this);  // becoz node ke andar global scope empty hai

// function loa (){
//     let username = "Ankkur"   // function k andar this use nai hoga 
//     console.log(this.username);
// }

// loa()

// const loa = function () {
//     let username = "Ankur"
//     console.log(this.username);
// }

// const loa =  () => {
//     let username = "Ankur"  // Arrow Function
//     console.log(this.username);
// }

const loa = function () {
    let username = "Ankur"
    console.log(this);
}
// loa()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit Return

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "ankur"})


console.log(addTwo(3, 4));
