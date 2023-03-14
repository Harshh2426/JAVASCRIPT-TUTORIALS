// constructor function
function Person() {
  (this.name = "John"), (this.age = 23);
}

const person = new Person();

// checking the prototype value
console.log(Person.prototype);
//In initially,the prototype is not defined.

// creating objects
let person1 = new Person();
let person2 = new Person();

// U can add any no of prototype
// When we want to adding new property to constructor function,then use prototype.
Person.prototype.gender = "Male";
Person.prototype.color = "Black";
Person.prototype.greet = function () {
  console.log("hello" + " " + this.name);
};
console.log(Person.prototype);
console.log(person1.gender); // Male
console.log(person2.gender); // Male

// changing prototype value
Person.prototype = { gender: "Female" };

// when u change prototype value then u should use new object to access this change
let person3 = new Person();
console.log(Person.prototype);
console.log(person1.gender); // Male
console.log(person2.gender); // Male
console.log(person3.gender); // Female

function car() {
  this.name = "John";
}

// since name is already declared in constructor so when u execute the value of constructor property first use.
car.prototype.name = "Peter";
car.prototype.age = 23;

const person4 = new car();

console.log(person4.name); // John
console.log(person4.age); // 23

// u can access prototype property
console.log(person4.__proto__);
// use of above method is avoided
