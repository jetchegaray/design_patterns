const CurrencyConverter = require("../CurrencyConverter");

class Cost {
  @CurrencyConverter("EUR", "ARS")
  compute(qty, cost) {
    return Promise.resolve(qty * cost);
  }
}

const price = new Cost();
price.compute(20, 5).then((result) => console.log(result));
