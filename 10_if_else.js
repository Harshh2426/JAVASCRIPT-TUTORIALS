let age = 18;
if (age < 18) {
  console.log("Your age is less than 18");
} else if (age == 18) {
  console.log("your age is equal to 18");
} else {
  console.log("Your age is greater than 18");
}

// -> Ternary operator

let a=10;
console.log(a<18?"a<18":"a>=18");

// -> Nullish coalescing operator(??)
// return b if it is not null or undefined otherwise it print second argument

let b = null; // or undefined
console.log(b ?? "hello")
