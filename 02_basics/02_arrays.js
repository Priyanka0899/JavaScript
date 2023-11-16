const names = ["abhi", "priyanka", "piri"]
const city = ["delhi","mansa","najafgarh"]

 //names.push(city) // city becomes an array elements in names array

 //console.log(names) 
 //console.log(names[3][1])

 //const arr = names.concat(city) // concatenates the elements of city array into names

 //console.log(arr)

//const all = [...names,...city] // (spread operator) // this is preferred instead of concat because it can take multiple arrays 
//console.log(all)

const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

console.log(another)

const real_another = another.flat(Infinity) // spreads out the array elements

console.log(real_another)

console.log(Array.isArray("PRIYANKA"))

console.log(Array.from("PRIYANKA"))  // makes it an array

console.log(Array.from({name : "priyanka"}))

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3))



