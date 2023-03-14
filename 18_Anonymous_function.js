// -> Anonymous function : The function which has no name

let greet = function () {
  console.log("Hello how are you");
};
greet();

let sum = function (a, b, c) {
  return a + b + c;
};
console.log(sum(1, 2, 3));

setTimeout(greet, 3000);
