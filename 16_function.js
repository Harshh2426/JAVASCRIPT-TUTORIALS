// -> PROBLEM IN USING DIRECT PRINT AND RETURN

function su(a,b){
  console.log(a+b);
}
let d = su(23,23); 

// here the calling function is not used but the output is print due to indirect call of function.
// This is wrong behavior.
// for avoiding this,we can use return which doesn't give output on indiect call.


function suu(a,b){
  return a+b;
}
let e=suu(23,23); 

console.log(e); // Now give output.

// -> function with no return value

function greet() {
  console.log(`Hello my name is harry`);
}

greet();

// -> function with return value

function helper() {
  return 45;
}
console.log(helper());

// -> function with argument and paramter

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

// -> function with default value

function defsum(a = 0, b = 0) {
  return a + b;
}
console.log(defsum(1));


