const accountId = 144553
let accountEmail = "parora0711@gmail.com"
var accountPassword = "12345"
accountCity = "Jamshedpur"
let accountState;

/* Prefer not to use var because of issue in block scope and functional scope */

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
