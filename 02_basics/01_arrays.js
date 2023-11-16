const arr1 = [0,1,2,3,4,5]

console.log(arr1[0])

const arr2 = new Array(1,2,3,4)
console.log(arr2[1])

// Array methods

arr1.push(6)
arr1.push(7)
arr1.pop()
console.log(arr1)

arr1.unshift(9)  // insert 9 at the start of the array and shifts all the elements

arr1.shift() // removes first element

console.log(arr1.includes(9)) // false

console.log(arr1.indexOf(9))  // gives -1 cz element doesnt exist

const newArr = arr1.join()

console.log(arr1)  // [1,2,3,4]
console.log(typeof newArr)  // string 1,2,3,4

// slice, splice

console.log("A: ",arr1)

const myn1 = arr1.slice(1,3)  // prints elements from index 1 to index 3 (excludes)  (doesnt manipulate the original array)

console.log(myn1)
console.log("B: ",arr1)

const myn2 = arr1.splice(1,3)  //manipulates the original array and deletes the elements from index 1 to 3(includes)
console.log(arr1)
console.log(myn2)





