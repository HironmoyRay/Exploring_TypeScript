console.log("Hello World");

let playerName;
console.log(typeof playerName);

playerName = "Hironmoy";
playerName=23;

console.log(typeof playerName);

function multiply(a:number,b:number){
    return a*b;
}

console.log(multiply(4,4));

let fruit = ["apple","banana"];
fruit.push("12")

const person={
    name:"Hironmoy",
    age: 23,
    captain: true,
}

person.age=24;


let a:(string | number)[] = [];
a.push("apple",12)
console.log(a);

let b: {
    name:string,
    age:number,
    adult: boolean,
}

b = {
    name:"Hironmoy",
    age:23,
    adult:true,
}