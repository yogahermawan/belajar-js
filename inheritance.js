const readline = require("readline-sync");
let angka1 = readline.question("Masukan Angka 1: ");
let angka2 = readline.question("Masukan Angka 2: ");

class Animal {
    constructor(name, angka1, angka2) {
        this.name = name;
        this.angka1 = angka1;
        this.angka2 = angka2;
    }

    speak() {
        console.log(this.name + " Animal speak");
    }
    penjumlah() {
        console.log(this.angka1 + this.angka2);
    } 
    pengurangan() {
        console.log(this.angka1 - this.angka2);
    }
    perkalian(a, b) {
        console.log(this.angka1 * this.angka2);
    }
    pembagian(a, b) {
        console.log(this.angka1 / this.angka2);
    }
    modulus(a, b) {
        console.log(this.angka1 % this.angka2);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(this.name + " Dog speak");
    }
}

let dog = new Dog("Rex");
let animal = new Animal("Rex", parseInt(angka1), parseInt(angka2));  
dog.speak();
animal.speak();
animal.penjumlah();

// animal.pengurangan();
// animal.pembagian();
// animal.perkalian();