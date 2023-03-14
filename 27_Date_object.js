// -> A Date is defined using Date object because it helps in date comparison
// -> This take browser date
let x = new Date();
console.log(x);

// -> If u want to give own date then use
let y = new Date(2018, 11, 13, 10, 33, 56, 7);
console.log(y);
console.log(typeof y);
console.log(y.toLocaleString()); // It helps to get date and time in country format.

// -> There are different method to present date,this is string format
let m = new Date("October 13,2018 11:12:33");
console.log(m);

// -> If u not defined any field then 0 is present if other then three field
let z = new Date(2018, 11, 13, 10);
console.log(z);

let a = new Date(1);
console.log(a);

// -> The two field are important for date declaration
let b = new Date(2017, 09);
console.log(b);

// -> to get date in miliseconds from 1 january 1970
let p = Date.parse("March 21,2022");

// or

let q = Date.now();

console.log(p);
console.log(q);

let n = new Date();
// ->In js,time is basically stored in form of miliseconds from 01-01-1970
console.log(n.getTime());

// -> To show year use
console.log(n.getFullYear());

// -> To show month use(month{0-11}{0 : January}{11 : December})
console.log(n.getMonth());

// -> To show date use
console.log(n.getDate());

// -> To show hours use
console.log(n.getHours());

// -> To show minutes use
console.log(n.getMinutes());

// -> To show seconds use
console.log(n.getSeconds());

// -> To show day use({0 : Sunday}{6 : Saturday})
console.log(n.getDay());

// -> To set year use
n.setFullYear(2024);
console.log(n);

// -> To set month use
n.setMonth(2);
console.log(n);

// -> To set date use
n.setDate(25);
console.log(n);

// -> To get date after 50 days use
n.setDate(n.getDate() + 50);
console.log(n);

// -> Date comparison
let u = new Date("October 13,2024 11:15:33");
let v = new Date();
if (v > u) {
  console.log("u is past date");
} else if (v < u) {
  console.log("u is future date");
} else {
  console.log("same date");
}
