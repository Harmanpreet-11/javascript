// const coding = ["js", "ruby", "java"]

// coding.forEach( function (item) { //callback function which dosen't include name
//     console.log(item);
    
// } )


// coding.forEach( (item) => {   //arrow function
//     console.log(item);
    
// })


// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)  //here we are taking reference of function not declarating it .

// coding.forEach( (item ,index, arr) => {
//     console.log(item, index, arr);
    
// })


const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    }
]

myCoding.forEach((item) =>{
    console.log(item.languageName);
    
})