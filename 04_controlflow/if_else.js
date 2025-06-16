// if statement 

// const isUserLoggedIn = true
// if (2 === "2"){
//     console.log("Executed");
// }
// console.log("Not executed");

// const score = 200
// if(score > 100){
//     const power = "Fly"
//     console.log(`User power: ${power}`);
// }
// // console.log(`User power: ${power}`); // scope problem because we used const


const balance = 1000

// if(balance> 500) console.log("Test");

// if(balance < 500) {
//     console.log("Low balace");
// }
// else if(balance < 750){
//     console.log("Still low balance")
// }
// else if( balance < 900){
//     console.log("Less than 900");
    
// }
// else {
//     console.log("More than 900");
    
// }

// const UserLoggedIn = true
// const debitCard = true

// if(UserLoggedIn && debitCard){
//     console.log("Allowed to do shopping");
// }

const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if(userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log("User can buy courses");
    
}