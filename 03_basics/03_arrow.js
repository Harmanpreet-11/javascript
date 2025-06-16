// const user = {
//     username:"Harmanpreet Singh",
//     price : 100,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to the website`);
//         // console.log(this);
        
        
//     }
// }

// // user.welcomeMessage()
// // user.username="Roy"               // context changes ( values are changes in this case username is changed)
// // user.welcomeMessage()

// // console.log(this);                // refering to {} object 


// function coffee(){
//     let username = "Harman"
//     console.log(this.username);
// }
// coffee()                             //glocal value unlike browser



// const coffee = () => {            //arrow function 
//     let username = "HARMAN"
//     console.log(this);
    
// }

// coffee()



// ARROW FUNCTION => 


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))


//const addTwo = (num1 , num2) => (num1 + num2)    // implicit return 
console.log(addTwo(3,4))

const addTwo = (num1 , num2) => ({username: "Harman"})   // to return object we need to wrap it in paranthesis

const myArray = [2,5,3,7,8]
myArray.forEach(function () {})