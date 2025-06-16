// const userEmail = []
// if(userEmail){
//     console.log("Got user email")
// }
// else {
//     console.log("Didn't receive email")
// }

//falsy value 0 ,-0 , BigInt , 0n , "" , null , undefined , NaN

//truthy value 

// "0" , 'false' , " " , [] , {} , function(){} 


//Nullish coalescing Operator (??) : null undefined

let val1 ;
//val1 = 5 ?? 10 
// val1 = null ?? 5
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);
