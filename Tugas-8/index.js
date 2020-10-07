// -------------------- Soal 1 --------------------
// di index.js
var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

// Tulis code untuk memanggil function readBooks di sini
var i = 0
const callback = (sisaWaktu) => {
    if (sisaWaktu > 0) {
        i = (i + 1) % books.length
        readBooks(sisaWaktu, books[i], callback)
    }
}
readBooks(10000, books[i], callback)

