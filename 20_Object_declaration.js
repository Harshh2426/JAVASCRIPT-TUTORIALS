// -> The decalaration of Object
// 1) Using Object Literal
let car = {
  name: "volvo",
  model: 1192,
  seats: 5,
};
console.log(car);
console.log(typeof car);

// 2) Create an Object using instance of object
let car2 = new Object({
  name: "volvo",
  model: 1192,
  seats: 5,
});
console.log(car2);
console.log(typeof car2);

let person = new Object();
person.name = "Hello";
person.age = "30";
console.log(typeof person);
console.log(person);

// 3) using constructor function
// -> using of this is necessary
function car1() {
  (this.name = "volvo"), (this.model = 1192), (this.seats = 5);
}
console.log(car1());
console.log(typeof car1);

const car3 = new car1();
console.log(car3);
console.log(typeof car3);
