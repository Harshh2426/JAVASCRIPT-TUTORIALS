// -> In JS, there is three type of scope

// -> 1) BLOCK SCOPED

// let and const are block scope.
// var are not block scope.

{
  let x = 1;
  // u can only access x inside the block.
}
// console.log(x);

{
  const y = 3;
  // u can only access y inside the block.
}
// console.log(y);

{
  var z = 10;
  // here we can access z outside the function also.
}
console.log(z);

// -> 2) FUNCTION SCOPED

// -> var,let and const are function scope.

function hello() {
  let x = "Ram";
}
// hello();
// console.log(x);

function hello() {
  var x = "Ram";
}
// hello();
// console.log(x);

function hello() {
  const x = "Ram";
}
// hello();
// console.log(x);

// -> 3) GLOBAL SCOPED

// var,let and const are global scoped.

var varx = "x";
let lety = "y";
const constz = "z";

{
  console.log(varx);
  console.log(lety);
  console.log(constz);
}

// IF THE VARIABLE IS DECLARED DIRECTLY, THEN IT IS GLOBAL SCOPED.
function hello() {
  x = "Ram";
}
hello();
console.log(x);
