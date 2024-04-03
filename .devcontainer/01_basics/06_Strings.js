const name = "ankur"
const repoCount = 50

// console.log(name + repoCount + " Value"); /* older way */

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); /* new way of writing the string */

const gameName = new String('Ankur-kat')

// console.log(gameName[0]); // key value player //
// console.log(gameName.__proto__); // prototype method //

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)

// console.log(newString);

const anotherString = gameName.slice(-6, 5)
// console.log(anotherString);

const newStringOne = "   Ankur   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://www.google.com/ankur%20katara"

// console.log(url.replace('%20', '-')); 
// console.log(url.includes('ankur'));

// console.log(gameName.split('-'));

const myName = "my name is anthony gonsalves"
let index = 5

// console.log(`the value at index ${index} is ${myName.charAt(index - 2)}`);

// console.log(`the value at ${myName.charCodeAt(index)} is ${(myName.charAt(index))}`);

// console.log(`the value at ${myName.codePointAt(index)} is ${(myName.charAt(index))}`);

const str1 = "hello"
const str2 = "world"

// console.log(`mixing of ${str1} into the ${str2}`);

console.log(str1.endsWith('hello'));
console.log(str1.endsWith('hello', str1.length));


