const axios = require("axios");

// we pass an argument a function, in this case the original function in the app.js
const CurrencyConverter = (fn) => {
  return async function (qty, price, currencyFrom, currencyTo) {
    const result = await fn(qty, price);
    const currencyRate = await axios.get(
      `https://api.exchangerate.host/latest`
    );
    //"rates": { "ARS": 206.928991,.... }
    return currencyRate.data.rates[`${currencyTo.toUpperCase()}`] * result;
  };
};

module.exports = CurrencyConverter;
