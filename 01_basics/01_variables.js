const accountId = 1234
let accountEmail = "harman@gmail.com"
var accountPassword = "45345"
accountCity = "Panagarh"
let accountState;

// accountId = 2  not allowed 

accountEmail = "haru@gmail.com"
accountPassword = "223333"
accountCity = "Durgapur"

console.table([accountId,accountEmail,accountPassword,accountState,accountCity]);

// do not use var because of block scope and functional scope !!