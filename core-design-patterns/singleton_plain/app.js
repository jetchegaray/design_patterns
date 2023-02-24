const cashRegister = require("./CashRegister");
const cashRegister1 = require("./CashRegister");

cashRegister.credit(25);
cashRegister.credit(35);

cashRegister1.credit(20);

console.log(`Total amount in the cash 1 is ${cashRegister1.total()}`);

cashRegister.debit(5);

console.log(`Total amount in the cash is ${cashRegister.total()}`);

// here always it will use the same instance of the cashregister
