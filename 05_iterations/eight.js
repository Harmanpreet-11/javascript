const myNums = [1, 2, 3]

// const sumWithInitial = myNums.reduce(function(acc, currentVal) {
//     console.log(`acc: ${acc} , currentVal: ${currentVal}`); //using functions
    
//     return acc + currentVal
// }, 0)
// console.log(sumWithInitial);


const myTotal = myNums.reduce((acc, currentVal) => acc + currentVal, 0)
console.log(myTotal); //using arrow functions
