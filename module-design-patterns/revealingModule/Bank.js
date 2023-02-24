//this ia a private variable
let accounts = [];

//this is private function
const _findAccount = (name) =>
  accounts.find((accounts) => accounts.name === name);

const createAccount = (name, amount = 0) => {
  if (!_findAccount(name)) {
    accounts.push({
      name,
      amount,
    });
    return `new account created ${name}`;
  }
  return `Account ${name} already exists`;
};

const credit = (name, amount) => {
  if (_findAccount(name)) {
    accounts.map((account) => {
      if (account.name === name) {
        account.amount += amount;
        console.log(account);
      }
    });
  }
};

const debit = (name, amount) => {
  if (_findAccount(name)) {
    accounts.map((account) => {
      if (account.name === name) {
        account.amount -= amount;
        console.log(account);
      }
    });
  }
};

const balance = (name) => {
  if (_findAccount(name)) {
    return accounts.find((account) => account.name === name)["amount"];
  }
  return "Account not found";
};

module.exports = {
  createAccount,
  credit,
  debit,
  balance,
};
