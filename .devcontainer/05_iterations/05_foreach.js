const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (value) {
    // console.log(value);
})

// coding.forEach( (value) => {
//     console.log(value);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languagename: "javascript",
        languageFileName: "js"
    },

    {
        languagename: "python",
        languageFileName: "py"
    },
    
    {
        languagename: "java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languagename);
})