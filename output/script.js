"use strict";
console.log("Hello World");
let playerName;
console.log(typeof playerName);
playerName = "Hironmoy";
playerName = 23;
console.log(typeof playerName);
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 4));
let fruit = ["apple", "banana"];
fruit.push("12");
const person = {
    name: "Hironmoy",
    age: 23,
    captain: true,
};
person.age = 24;
let a = [];
a.push("apple", 12);
console.log(a);
let b;
b = {
    name: "Hironmoy",
    age: 23,
    adult: true,
};
const myFunc = (a, b) => {
    console.log(`Hello ${a} ${b}`);
};
myFunc("Hironmoy", "Ray");
const userDetails = (id, user) => {
    console.log(`User id is ${id} & name is ${user.name} and age is ${user.age}`);
};
userDetails(1, { name: "hironmoy", age: 34 });
// Function Signature
let myResult;
myResult = (reg, student) => {
    if (student.marks > 33) {
        return "Pass";
    }
    else {
        return "Fail";
    }
};
console.log(myResult(111111, { name: "HP", roll: 10, marks: 34 }));
class player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const Hironmoy = new player("Hironmoy", 34, "Bangladesh");
// Use class as type 
// const array:string[] = [];
const players = [];
