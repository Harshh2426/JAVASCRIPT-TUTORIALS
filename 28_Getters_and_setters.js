// -> When we want to get a value by manuplating the data,then use getter

let person = {
  name: "Harry",
  age: 26,
};
console.log(person.name.toUpperCase());

// -> But we want when the variables comes out from object then it is in uppercase
// -> It can be created using a function
// -> here we access methods but not accessing property.

let person1 = {
  name: "Harry is good boy",
  age: 26,
  getname: function () {
    console.log(this.name.toUpperCase());
  },
};
person1.getname();

// -> Now by using get
// -> here we access the changed value by using variables not methods

let person2 = {
  name: "Harry is good boy",
  age: 26,
  get getname() {
    console.log(this.name.toUpperCase());
  },
};
person2.getname;

// -> Setter Function
// -> When we want to set the value by maipulating the variables by object.
let person3 = {
  name: "Harry is bad boy",
  age: 26,
  set setname(n) {
    this.name = n.toUpperCase();
  },
};
person3.setname = "Ram is a good boy";
console.log(person3);
