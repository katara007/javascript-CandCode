const marvelHeros = ["spiderman", "ironman", "hulk"]
const dcHeros = ["batman", "superman", "flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const newHeros = [...marvelHeros, ...dcHeros]

// console.log(newHeros);

const numberArray = [1, 2, 3, [4, 5, 6], 7, [8, 9,[4, 5]]]
const newNumberArray = numberArray.flat(Infinity)

// console.log(newNumberArray);

// console.log(Array.isArray("ankur"));
// console.log(Array.from("ankur"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));