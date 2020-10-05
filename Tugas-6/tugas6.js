// ------------------------------- Soal 1 -------------------------------
console.log('------------------------------- Soal 1 -------------------------------')

const phi = 3.14
const luasLingkaran = (r) => {
    let kuadratRadius = r * r
    return phi * kuadratRadius
}

const kelilingLingkaran = (r) => {
    return 2 * phi * r
}

console.log(luasLingkaran(7))
console.log(kelilingLingkaran(7))

// ------------------------------- Soal 2 -------------------------------
console.log('------------------------------- Soal 2 -------------------------------')

let kalimat = ""
const tambahKalimat = (kata) => {
    kalimat += `${kata} `
}

tambahKalimat('saya')
tambahKalimat('adalah')
tambahKalimat('seorang')
tambahKalimat('frontend')
tambahKalimat('developer')

console.log(kalimat)

// ------------------------------- Soal 3 -------------------------------
console.log('------------------------------- Soal 3 -------------------------------')

// const newFunction = function literal(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         fullName: function () {
//             console.log(firstName + " " + lastName)
//             return
//         }
//     }
// }

// //Driver Code 
// newFunction("William", "Imoh").fullName() 

const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(`${firstName} ${lastName}`)
            return
        }
    }
}

newFunction("William", "Imoh").fullName()

// ------------------------------- Soal 4 -------------------------------
console.log('------------------------------- Soal 4 -------------------------------')

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation } = newObject
console.log(firstName, lastName, destination, occupation)

// ------------------------------- Soal 5 -------------------------------
console.log('------------------------------- Soal 5 -------------------------------')

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

const combined = [...west, ...east]

console.log(combined)