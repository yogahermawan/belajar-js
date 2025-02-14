//closure       
//closure adalah sebuah fungsi yang bisa digunakan di dalam fungsi lain 
// closure = nested function

// function closure() {
//     let a = 10;
//     return {
//         closureInner: () => {
//             console.log(a);
//         }
//     }
// }

// function createCounter() {
//     let count = 0;
//     return {
//         increment: () => ++count,
//         getCount: () => count
//     };
// }

// const counter = createCounter();
// counter.increment();
// console.log(counter.getCount());

// counter = 10;
// console.log(counter);


const penjumlahan = (a, b) => {
    return a + b;
};

const discount = (price) => {
    return price - (price * 0.1);
};

discount(penjumlahan(10, 20));

import Animal from "./inheritance.js";

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log("Dog speak");
    }
}

let dog = new Dog("Rex");
dog.speak();