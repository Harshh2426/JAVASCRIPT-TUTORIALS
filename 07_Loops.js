// -> for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
    //document.write(i);
}

// -> while loop
let j = 1;
while (j < 5) {
  console.log(j);
  j++;
}

// -> for in loop
// -> it is basically used for object.
// -> it basically return index.
let a = {
  name: "harry",
  age: 5,
  salary: 12000,
};
for (let key in a) {
  console.log(key + ":" + a[key]);
}

// -> for of loop
// -> it is used for string and array.
// -> it basically return element.
let b = [1, 2, 3, 4, 5];
for (let x of b) {
  console.log(x);
}
