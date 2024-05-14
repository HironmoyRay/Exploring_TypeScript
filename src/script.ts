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


const myFunc = (a:string,b:string) =>{
    console.log(`Hello ${a} ${b}`);
}
myFunc("Hironmoy","Ray")

// Type Aliases

type stringOrNumber = string | number;
type userType = {name:string;age:number };

const userDetails = (id: stringOrNumber , user: userType)=>{
    console.log(`User id is ${id} & name is ${user.name} and age is ${user.age}`)
}

userDetails(1 , {name:"hironmoy",age:34})


// Function Signature
let myResult:(reg:string | number, student:{
    name:string,
    roll: number,
    marks: number
} ) => string;

myResult = (reg:string|number, student:{
    name:string,
    roll:number,
    marks:number
})=>{
    if(student.marks>33){
        return "Pass";
    }
    else{
        return "Fail"
    }
}

console.log(myResult(111111,{name:"HP", roll:10, marks:34}))

// class player {
//     name: string;
//     age: number;
//     country: string;

//     constructor(n:string, a:number, c:string){
//         this.name=n;
//         this.age=a;
//         this.country=c;
//     }
// }

class player{
    constructor(
        private name: string,
        public age: number,
        readonly country: string,
    ){

    }
}

const Hironmoy = new player("Hironmoy", 34, "Bangladesh");

console.log(Hironmoy.age);

// Use class as type 
// const array:string[] = [];

const players: player[]=[];