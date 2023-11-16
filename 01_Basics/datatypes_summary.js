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

/////////////

// Stack(Primitive) Heap (non-primitive)

let a = "priyanka"

let b=a
b="pirii"

console.log(a)
console.log(b)

let userOne = {
    email: "parora0711@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "2021pgcaca099"

console.log(userOne.email)
console.log(userTwo.email)

