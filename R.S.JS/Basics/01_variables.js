const accoutId = 144553
let accountEmail = "user@gmail.com"
var accountPassword = "1234"
accountCity = "jaipur"
let accountState;
// accoutId = 2 // Not allowed because const vars can not change
console.log(accoutId);
accountEmail="Abc@gm.com"
accountPassword="3423"
accountCity="bbsr"
console.table([accoutId,accountEmail,accountPassword,accountCity,accountState])
/*
Prefer not to use var bcoz of issue in block scope and functional scope.Use const or let
*/
