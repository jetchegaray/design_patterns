const Bank = require("./Bank");
const user1 = "javito";
const logger = require("./consoleLogger");
const loggerFile = require("./fileLogger");

const bank = new Bank();

bank.setLogger(logger);

bank.createAccount(user1);
bank.credit(user1, 100);
bank.debit(user1, 5);
console.log(bank.balance(user1));

bank.setLogger(loggerFile);

bank.createAccount(user1);
bank.credit(user1, 100);
bank.debit(user1, 5);
console.log(bank.balance(user1));
