const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Pirrii"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "pirri@gmail.com",

    fullname: {
        userfullname : {
            firstname : "priyanka",
            lastname : "arora"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1 , obj2 }
// const obj3 = Object.assign({} ,obj1 , obj2, obj4) // these objects are assigned to {}, if we dont write {} then all these objects will be assigned to obj1

const obj3  = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "piri@gmail.com"
    }
]

//users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))  //true

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course

console.log(instructor)

const navbar = ({company}) => {

} 

navbar(company = "hitesh")


