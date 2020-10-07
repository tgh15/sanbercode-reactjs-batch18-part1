// -------------------- Soal 2 --------------------

var readBooksPromise = require('./promise.js')

var books = [
    { name: "LOTR", timeSpent: 3000 },
    { name: "Fidas", timeSpent: 2000 },
    { name: "Kalkulus", timeSpent: 4000 },
]

var i = 0
var time = 10000

const read = (time, book) => {
    if (time > 0) {
        i = (i + 1) % books.length
        readBooksPromise(time, book)
            .then(sisa => {
                read(sisa, books[i])
            })
            .catch(err => {
                return err
            })
    }
}

console.log(`saya punya waktu ${time} untuk membaca buku`)
read(time, books[i])