// Primitive 

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 8132737873479367364276327n



// Refrence (Non - Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "spiderman", "nagraj"]; //Array
let myObj = {
    name: "manshi",
    age: 18,
} // Objects

const myFunction = function (){
    console.log("Hello world");
    
}

console.log(typeof heros );


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let myYoutubename = "hey.com"

let anothername = myYoutubename;
anothername = "heymyworld"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email:"user@gmail.com",
    upi: "user@byl"

}
let userTwo = userOne

userTwo.email = "hey@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
