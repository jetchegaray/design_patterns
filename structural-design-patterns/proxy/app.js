const { lock, unlock } = require("./vault");

const password =
  "dfljhflkjaslfkjsdlkfjsdq123123123123123123123123123123123123123123123123123123";
const obj = {
  name: "javito",
  age: 38,
  city: "buenos aires",
  country: "Argentina",
};

const person = lock(obj, password);
//now I can add properties to the proxy but not to the original  object
person.nickname = "ajuua";
person.lasName = "etchega";

console.log(person);

// now I apply the new properties to the original object
const unlocked = unlock(person, password);

console.log(unlocked);
