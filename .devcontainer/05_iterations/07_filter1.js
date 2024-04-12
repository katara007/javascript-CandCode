const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
    
})

// console.log(newNums);

const books = [
    {title: 'book one', genre: 'fiction', publish: '1981', edition: '2004'},
    {title: 'book two', genre: 'non-fiction', publish: '1991', edition: '1993'},
    {title: 'book three', genre: 'history', publish: '1945', edition: '2003'},
    {title: 'book four', genre: 'non-fiction', publish: '1961', edition: '1994'},
    {title: 'book five', genre: 'science', publish: '2000', edition: '2000'},
    {title: 'book six', genre: 'fiction', publish: '2004', edition: '2014'},
    {title: 'book seven', genre: 'history', publish: '1899', edition: '1905'},
    {title: 'book eight', genre: 'science', publish: '1995', edition: '2018'}
];

// const userBooks = books.filter( (bk) => bk.genre === 'history' )
const userBooks = books.filter( (bk) => bk.publish >= '1995' && bk.genre === 'fiction' )

console.log(userBooks);