// Immediately Invoked Function Expressions (IIFE)

function one () {
    console.log(`DB CONNECTED`);
}
// one()

(function one () {
    console.log(`DB CONNECTED`); // IIFE syntex => Global scope ke polletion se bachne k liye
})();

( () => {
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Ankur")