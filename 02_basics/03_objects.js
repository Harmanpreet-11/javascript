// singelton ->  object created from constructor ( onject.create )
// literals declared object are not singelton -> we will declare like that only 


// OBJECT LITERALS

const harmanUser = {
    name : String("Harmanpreet Singh") ,
    age: Number(21) ,
    email: "harmanpreet33@gmail.com" ,
    isLoggedIn: false ,
    lastLoginDays :["Monday" , "Wednesday"]
}

// console.log(harmanUser.email)
// console.log(harmanUser["email"])

harmanUser.greetings = function () {
    console.log("Hello JS User");
}

console.log(harmanUser.greetings())

harmanUser.greetingsTwo = function() {
    console.log(`Hello JS User, ${this.name}`)
}
console.log(harmanUser.greetingsTwo());
