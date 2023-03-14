// There are seven datatypes in js
// -> Number
// -> Null
// -> Boolean
// -> BigInt
// -> String
// -> Symbol
// -> Undefined

// -> If a variable is declared and not assigned a value then it can store undefined.

let a = 10;
console.log(typeof a);

let c = true;
console.log(typeof c);

let b = "hello";
console.log(typeof b);

let d ;
console.log(typeof d);

let e = null;
console.log(typeof e); // -> Here the typeof null is object which is a bug.

let f = BigInt("4513");
console.log(typeof f);

let x = Symbol("sbj");
console.log(typeof x);
