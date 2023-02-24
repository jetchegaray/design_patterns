const CurrencyConverter = require("./CurrencyConverter");

const Cost = (qty, price) => Promise.resolve(qty * price);

Cost(20, 5).then((result) => console.log(result));

// with converter

const costPlus = CurrencyConverter(Cost);

costPlus(20, 5, "EUR", "ARS").then((result) => console.log(result));
