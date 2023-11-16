const name = "priyanka"
const repoCount = 6

console.log(name + repoCount)
console.log(`hello my name is ${name} and repocount is ${repoCount}`)

const gameName = new String("Priyanka")

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('y'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const another1="             priyanka         "

console.log(another1)
console.log(another1.trim())

const url = "https//:priyanka%20arora.com"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))


