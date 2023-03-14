// -> Object access

const car = {
  name: "volvo",
  seats: 5,
  color: "Yellow",
  model: 1145,
  "owner no": 782575525,
};

// -> for accessing using dot
console.log(car.name);
// console.log(car.owner no);  here u cann't access space sperated variables

// -> for accessing using bracket
console.log(car["seats"]);
console.log(car["owner no"]);

// -> In object, function are known as methods.
// -> In object, key-value pairs are called properties.

const car1 = {
  brake: function () {
    console.log("hello");
  },
};

car1.brake();

// -> adding in object externally
car1.name = "harry";
console.log(car1.name);

car1.speed = function () {
  console.log("Increase speed");
};
car1.speed();
console.log(car1);

// -> this is used for object property
const student = {
  id: 23,
  skill: "c++",
  age: 67,
  details: function () {
    console.log(
      `the student with id ${this.id} has age ${this.age} and skill ${this.skill}`
    );
  },
};
student.details();

// -> Now there is no need to write function during declaration of methods inside object.
const student1 = {
  id: 23,
  skill: "c++",
  age: 67,
  details() {
    console.log(
      `the student with id ${this.id} has age ${this.age} and skill ${this.skill}`
    );
  },
};
student1.details();

// Adding new property in object
student1.name = "Raone";
console.log(student1);

// deleting property in object
delete student1.name;
console.log(student1);

// For checking property in object exist or not
console.log("id" in student1);

// Adding property
student1.pagal = () => {
  console.log("hellow world");
};
console.log(student1);

delete student1.pagal();
console.log(student1);

