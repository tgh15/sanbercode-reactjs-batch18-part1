//--------------------------------- Soal 1 ---------------------------------
console.log('--------------------------------- Soal 1 ---------------------------------')

function halo() {
    return "Halo Sanbers!"
}

console.log(halo())

//--------------------------------- Soal 2 ---------------------------------
console.log('--------------------------------- Soal 2 ---------------------------------')

function kalikan(num1, num2) {
    return num1 * num2
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

//--------------------------------- Soal 3 ---------------------------------
console.log('--------------------------------- Soal 3 ---------------------------------')

function introduce(nama, umur, alamat, hobi) {
    return `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobi}!`
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 

//--------------------------------- Soal 4 ---------------------------------
console.log('--------------------------------- Soal 4 ---------------------------------')

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]
var objectDaftarPeserta = {}

objectDaftarPeserta.nama = arrayDaftarPeserta[0]
objectDaftarPeserta.jenis_kelamin = arrayDaftarPeserta[1]
objectDaftarPeserta.hobi = arrayDaftarPeserta[2]
objectDaftarPeserta.tahun_lahir = arrayDaftarPeserta[3]

console.log(objectDaftarPeserta)

//--------------------------------- Soal 5 ---------------------------------
console.log('--------------------------------- Soal 5 ---------------------------------')

var dataBuah = [
    {
        nama: 'strawberry',
        warna: 'merah',
        ada_bijinya: 'tidak',
        harga: 9000
    },
    {
        nama: 'jeruk',
        warna: 'oranye',
        ada_bijinya: 'ada',
        harga: 8000
    },
    {
        nama: 'Semangka',
        warna: 'Hijau & Merah',
        ada_bijinya: 'ada',
        harga: 10000
    },
    {
        nama: 'Pisang',
        warna: 'Kuning',
        ada_bijinya: 'tidak',
        harga: 5000
    }
]
console.log(dataBuah[0])

//--------------------------------- Soal 6 ---------------------------------
console.log('--------------------------------- Soal 6 ---------------------------------')

var dataFilm = []

function tambahDataFilm(nama, durasi, genre, tahun) {
    dataFilm.push({
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    })
}

tambahDataFilm('Avengers: Infinity War', '2 jam lebih', 'action, sci-fi', 2018)
tambahDataFilm('Avengers: End Game', '3 jam-an', 'action, sci-fi', 2019)
console.log(dataFilm)