// STACK AND HEAP MEMORY 


// let myEmail = "harmanpreet@gmail.com"

// let anotherEmail = myEmail
// anotherEmail = "haru@gmail.com"

// console.log(anotherEmail)


let userOne = {
    email: "user@gmail.com" ,
    upi: "user@ibl"
}

let userTwo = userOne;

userTwo.email = "harman@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

