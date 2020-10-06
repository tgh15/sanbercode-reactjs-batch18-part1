// ------------------------------- Soal 1 -------------------------------
console.log('------------------------------- Soal 1 -------------------------------')

class Animal {
    constructor(name) {
        this.name = name
        this.legs = 4
        this.cold_blooded = false
    }
}

var sheep = new Animal('shaun')

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Ape extends Animal {
    constructor(name) {
        super(name)
        this.legs = 2
    }

    yell() {
        console.log('Auooo')
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name)
    }

    jump() {
        console.log('hop hop')
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

// ------------------------------- Soal 2 -------------------------------
console.log('------------------------------- Soal 2 -------------------------------')

// function Clock({ template }) {

//     var timer;

//     function render() {
//         var date = new Date();

//         var hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         var mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         var secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         var output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     this.stop = function () {
//         clearInterval(timer);
//     };

//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };

// }

// var clock = new Clock({ template: 'h:m:s' });
// clock.start(); 

class Clock {
    constructor({ template }) {
        this._template = template
        this.timer
    }
    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this._template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }
    stop() {
        clearInterval(this.timer)
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000)
    }
}

var clock = new Clock({ template: 'h:m:s' })
clock.start()