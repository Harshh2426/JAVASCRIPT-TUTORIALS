var a = 10; // -> local variable
console.log(a);
{
  var a = 15; // -> global variable
  console.log(a);
}
console.log(a);

// var is global scope. U can redeclare var.

let b = 20;
console.log(b);
{
  let b = 30;
  console.log(b);
}
console.log(b);

// let is block scope.U cann't redeclare let.

const c = 10;
console.log(c);
{
  c = 40;
  console.log(c); // -> It creates an error.
}
// If u define with const then u cann't reassign it a new value not in a block or not in a global scope.
