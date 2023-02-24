const axios = require("axios");

const CurrencyConverter = (currencyFrom, currencyTo) => {
  return function (target, name, descriptor) {
    try {
      const fn = descriptor.value; // the original function
      // we add new functionality here
      descriptor.value = async function (...args) {
        const result = await fn.call(this, ...args);
        const currencyRate = await axios.get(
          `https://api.exchangerate.host/latest`
        );
        //"rates": { "ARS": 206.928991,.... }
        return (
          (await currencyRate.data.rates[`${currencyTo.toUpperCase()}`]) *
          result
        );
      };
    } catch (e) {
      console.log(e);
    }
  };
};

module.exports = CurrencyConverter;
