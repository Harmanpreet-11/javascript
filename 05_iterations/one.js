//for loop

// for (let i= 0; i <= 10; i++) {
//     var element = i;
//     if(element == 5){
//         console.log("5 is the best number");
//     }
//     //console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value${i}`);
//     for (let j = 0; j <= 10; j++) {
// //console.log(`Inner loop value ${j} and outer loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
    
// }


// let myArray = ["flash" , "batman", "spiderman"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }

// break and continue 


// for (let index = 1; index <= 20; index++) {
//     if( index == 5) {
//         console.log("Detected 5");
//         break;  // breaks out of the loop 
//     }
//     console.log(`Value of i is ${index}`);   
// }

for (let index = 1; index <= 20; index++) {
    if( index == 5) {
        console.log("Detected 5");
        continue;  // skip it 1 time 
    }
    console.log(`Value of i is ${index}`);   
}