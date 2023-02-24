const splitStr = (arr) => arr.split("");

const reverseArr = (vec) => {
  return vec.reverse();
};

function joinStr(vec) {
  return vec.join();
}

const compose =
  (...functions) =>
  (str) => {
    functions.reverse().forEach((fn) => (str = fn(str)));
    // you have to assign them again to step on the value of the str
    return str;
    //functions.reduceRight((acc, func) => func(acc), str);
  };

const composedFunction = compose(joinStr, reverseArr, splitStr);

console.log(composedFunction("javito"));
