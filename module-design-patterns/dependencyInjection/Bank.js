//this ia a private variable
let accounts = [];

const findAccount = Symbol("findAccount"); //private

// we want to decoupling this logger from here
// const logger = (data) => console.log(data);

class Bank {
  logger;

  constructor() {}

  setLogger = (newLogger) => {
    this.logger = newLogger;
  };

  log = (str) => {
    if (this.logger) this.logger.write(str);
  };

  [findAccount] = (name) => accounts.find((accounts) => accounts.name === name);

  createAccount = (name, amount = 0) => {
    if (!this[findAccount](name)) {
      accounts.push({
        name,
        amount,
      });
      this.log(`new account created ${name}`);
      return accounts;
    }
    return `Account ${name} already exists`;
  };

  credit = (name, amount) => {
    if (this[findAccount](name)) {
      accounts.map((account) => {
        if (account.name === name) {
          account.amount += amount;
          this.log(`account credited ${account.name}, ${account.amount}`);
        }
      });
    }
  };

  debit = (name, amount) => {
    if (this[findAccount](name)) {
      accounts.map((account) => {
        if (account.name === name) {
          account.amount -= amount;
          this.log(`account credited ${account.name}, ${account.amount}`);
        }
      });
    }
  };

  balance = (name) => {
    if (this[findAccount](name)) {
      return accounts.find((account) => account.name === name)["amount"];
    }
    return "Account not found";
  };
}

module.exports = Bank;
