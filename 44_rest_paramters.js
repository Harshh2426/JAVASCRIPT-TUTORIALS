// It is bascially used to get elements of arguments in the form of array by using in parameter.

// It is basically used to condense large number of elements into a single element.

function sum(...arg) {
  let sumi = 0;
  for (let y of arg) {
    sumi += y;
  }
  return sumi;
}

let a = sum(2, 3, 4, 5, 6);
console.log(a);


// Rest operator should always be used at the end.
function print(a, b, ...c) {
  console.log(a);
  console.log(b);
  for (let d of c) {
    console.log(d);
  }
}
print(1, 2, 3, 4, 5);
