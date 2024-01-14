const accountId = 11487
let accountEmail = "mobishah765@gmail.com"
var accountPassword = "mob12"
accountCity = "Rawalpindi"

// accountId = 2 not Allowed
accountEmail = "syedabeeno680@gmail.com"
accountPassword = "no12"
accountCity = "Islamabad"
let accountState;

console.log(accountId);

/*
prefer not to use var because of  issue in blockscope and functional scope
*/
console.table([accountId , accountEmail, accountPassword , accountCity , accountState]);