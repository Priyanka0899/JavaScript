// Primitive

// 7 types:  String , Number, Boolean , null, undefined, symbol, BigInt

const id = Symbol('123')
const idd = Symbol('123')
console.log(id===idd)

const bigNumber = 235368739067238954673892548839n

console.log(bigNumber)

// Reference (Non-Primitive)

// Array, Objects, Functions

const heroes = ["Shaktiman", "naagraj", "doga"];
let myObj= {
    name :"Priyanka",
    age: 22,
} 

const myFunction = function() {
    console.log("Helluuu")
}

console.log(typeof(myFunction))
console.log(typeof(heroes))
console.log(typeof(myObj))