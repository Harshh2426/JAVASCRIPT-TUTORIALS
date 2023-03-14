// -> The main use of coonstructor function is when we are same property in different objects

function person() {
  (this.name = "John"),
    (this.age = 23),
    (this.greet = function () {
      console.log("hello");
    });
}
const person1 = new person();
const person2 = new person();
console.log(person1);
console.log(person2);

// -> using argument and parameter

function Student(name, age) {
  (this.name = name),
    (this.age = age),
    (this.greet = function () {
      console.log("hello");
    });
}
const student1 = new Student("harry", 35);
const student2 = new Student("Shyam", 45);

console.log(student1);
console.log(student2);

//  U can add unique property to particular object

student1.gender = "male"; // This can access by only student1 object.
console.log(student1);
console.log(student2);

// For adding property and method to main function use prototype.