const mySym = Symbol("key1")

const JsUser = {
    name: "ankur",
    "full name": "ankur katara",
    age: 23,
    [mySym]: "myKey1",
    email: "ankur@gmail.com",
    location: "jaipur",
    isLoggedIn: false,
    lastLoginDays: ["monday", "sunday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[ mySym]);

JsUser.email = "ankurkatara@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "anurkat@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingOne = function(){
    console.log(`Hello JS User, ${this.name}`);
}

// console.log(JsUser.greetingOne());
// console.log(JsUser.greeting());

// ++++++++++++++++++++++++++++++++++++++++++++++++++

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ankur"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "ankur@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ankur",
            lastname: "katara"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// +++++++++++++++++++++++object De-structure+++++++++++++++++

const course = {
    coursename: "JS in hindi",
    price: "999",
    teacher: "hitesh"
}

const {teacher} = course
console.log(teacher);

// {
//     name:"hitesh",
//     coursename: "js in hindi",
//     // price: "free"
// }

[
    {},
    {},
    {}
]