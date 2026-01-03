const accountId = 3989039
let accountEmail = "candy@gmail.com" // block-scoped
let accountState; //undefined

var accountPassword = "1234567890" // function-scoped, don't use, because of issues in block and functional scope
accountCity = "Jaipur" // don't, not allowed



// accountId = 7474747  // not allowed [TypeError: Assignment to constant variable.]
accountEmail = "samurai@gmail.com"
accountPassword = "987654"
accountCity = "Bengaluru"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])