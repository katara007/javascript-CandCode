const accountId=12234
let accountEmail="ankur@gmail.com"
let accountPassword="1324"
accountCity="Jaipur"
let accountState;

// accountId=2 // not allowed
accountEmail="ank@gmail.com"
accountPassword="2231"
accountCity="banglore"

console.log(accountId);

/*
prefer not to use var
becoz of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])