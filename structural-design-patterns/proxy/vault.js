const Crypt = require("cryptr");

const lock = (obj, password) => {
  const crypt = new Crypt(password);
  let newObj = {};
  for (let key in obj) {
    newObj[key] = crypt.encrypt(obj[key]);
  }

  return new Proxy(newObj, {
    //when user want to modified an existins property of the object, the set trap will execute it
    set(target, key, value) {
      return (target[key] = crypt.encrypt(value));
    },

    get(target, key) {
      return target[key];
    },
  });
};

const unlock = (obj, password) => {
  const crypt = new Crypt(password);
  let newObj = {};
  for (let key in obj) {
    newObj[key] = crypt.decrypt(obj[key]);
  }

  return new Proxy(newObj, {
    //when user want to modified an existins property of the object, the set trap will execute it
    set(target, key, value) {
      throw new Error("This is a read only object");
    },
  });
};

module.exports = {
  lock,
  unlock,
};
