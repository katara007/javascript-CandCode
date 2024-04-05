let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let createMydate = new Date(2024, 0, 23)
// let createMydate = new Date(2024, 0, 23, 5, 3)
let createMydate = new Date("2024-07-23")
// console.log(createMydate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createMydate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: 'long'
})