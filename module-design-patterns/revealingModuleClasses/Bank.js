//this ia a private variable
let accounts = [];

const findAccount = Symbol("findAccount"); //private

export default class Bank {
  constructor() {}

  [findAccount] = (name) => accounts.find((accounts) => accounts.name === name);

  createAccount = (name, amount = 0) => {
    if (!this[findAccount](name)) {
      accounts.push({
        name,
        amount,
      });
      return `new account created ${name}`;
    }
    return `Account ${name} already exists`;
  };

  credit = (name, amount) => {
    if (this[findAccount](name)) {
      accounts.map((account) => {
        if (account.name === name) {
          account.amount += amount;
          console.log(account);
        }
      });
    }
  };

  debit = (name, amount) => {
    if (this[findAccount](name)) {
      accounts.map((account) => {
        if (account.name === name) {
          account.amount -= amount;
          console.log(account);
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
