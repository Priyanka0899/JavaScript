// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "priyanka",      //key: value
    "full name" : "priyanka arora",
    [mySym]: "mykey1",
    location : "Jamshedpur",
    age: 24,
    email: "parora0711@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"] 
}

console.log(JsUser.location)
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "2021pgcaca099@nitjsr.ac.in"

//Object.freeze(JsUser)

JsUser.email = "parora@google.com"
//console.log(JsUser)

JsUser.greeting  = function(){
    console.log(`hello JS user, ${this.name}`)

}

console.log(JsUser.greeting())






