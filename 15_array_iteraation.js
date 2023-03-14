// -> Using foreach loop

let a = [1, 2, 3, 4, 5, 6];

// basically there are two method to use it.

// First method : use function inside forEach
a.forEach(function (element, index, array) {
  console.log( 2 * element);
});

// Second method : use function outside forEach

let m = a.forEach(he);
function he(element, index, array) {
  console.log(3 * element);
}

// -> using map method
// it return a new array

let b = a.map(helper);

function helper(element, index, array) {
  return 10 * element;
}
console.log(b);

// ->using filter method
let c = a.filter(helper1);

function helper1(element, index, array) {
  return element > 2;
}
console.log(c);

// using reduce value
// -> scans from left to right

let d = a.reduce(helper2);

function helper2(total, element, index, array) {
  return total + element;
}
console.log(d);

// using reduceright
// -> scans from right to left

let e = a.reduceRight(helper3);

function helper3(total, element, index, array) {
  return total + element;
}
console.log(e);

// every

let f = a.every(helper4);

function helper4(element, index, array) {
  return element > 2;
}
console.log(f);

// some

let g = a.some(helper5);

function helper5(element, index, array) {
  return element > 2;
}
console.log(g);

// find
// -> return the first element that satisfy the given condition

let h = a.find(helper6);

function helper6(element, index, array) {
  return element > 2;
}
console.log(h);

// findIndex
// return the first element index that satisfy the given condition

let i = a.findIndex(helper7);

function helper7(element, index, array) {
  return element > 2;
}
console.log(i);
