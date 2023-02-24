/******  SIngleton are objecs that can only have a single instance , a single source of truth, with a single point of access*/

/** module system provides a rudementary singleton, modules are achded when they're accessed using require for the very first time,
 *
 * the vaultModule.js  here acts like a singleton but it is a cache
 */

let cash = 0; // this is a private variable

const CashRegister = {
  credit(amount) {
    cash = cash + amount;
    return cash;
  },
  debit(amount) {
    cash = cash - amount;
    return cash;
  },
  total() {
    return cash;
  },
};

module.exports = CashRegister;
