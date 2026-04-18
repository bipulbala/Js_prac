const accountId = 144553
var accountPassword = "12345"
let accountEmail = "hitesh@google.com"
accountCity = "Jaipur"
let accountState;
// we don't use var anymore as it had scope issues of early versions of js
// so use let every time
//accountId = 2 // changing constant not allowed





accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

// // /
// // Prefer not to use var
// // because of issue in block scope and functional scope
// // */


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])