const obj = {
  name: "javito",
  age: 38,
  city: "buenos aires",
  country: "Argentina",
};

const makeReactive = (obj, observer) => {
  return new Proxy(obj, {
    set(target, key, value) {
      observer({ [key]: value });
    },
  });
};

const reactive = makeReactive(obj, (res) => {
  console.log(res);
});

reactive.color = "green";
reactive.age = 40;
reactive.favFruit = "apple";
