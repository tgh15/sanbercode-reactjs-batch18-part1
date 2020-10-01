console.log('-------------------- Soal 1 --------------------')
// -------------------- Soal 1 --------------------
var loop = 0
console.log('PERULANGAN PERTAMA')
while (loop < 20) {
    loop += 1
    loop++
    console.log(`${loop} - I love coding`)
}
loop += 2
console.log('PERULANGAN KEDUA')
while (loop > 2) {
    loop -= 1
    loop--
    console.log(`${loop} - I will become a frontend developer`)
}

console.log('-------------------- Soal 2 --------------------')
// -------------------- Soal 2 --------------------
for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        if (i % 3 == 0) {
            console.log(`${i} I Love Coding`)
        } else {
            console.log(`${i} Santai`)
        }
    } else if (i % 2 == 0) {
        console.log(`${i} Berkualitas`)
    }
}

console.log('-------------------- Soal 4 --------------------')
// -------------------- Soal 3 --------------------
var tagar = '#'
do {
    console.log(tagar)
    tagar = tagar + "#"
} while (tagar.length <= 7)

console.log('-------------------- Soal 4 --------------------')
// -------------------- Soal 3 --------------------
var kalimat = "saya sangat senang belajar javascript"
kalimat.split(' ')
console.log(kalimat)

console.log('-------------------- Soal 5 --------------------')
// -------------------- Soal 5 --------------------
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"]
daftarBuah.sort();
for (let index = 0; index < daftarBuah.length; index++) {
    console.log(daftarBuah[index])
}