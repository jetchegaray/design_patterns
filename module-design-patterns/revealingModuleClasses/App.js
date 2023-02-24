const Bank = require("./Bank");
const user1 = "javito";

const bank = new Bank();
bank.createAccount(user1);
bank.credit(user1, 100);
bank.debit(user1, 5);
console.log(bank.balance(user1));
