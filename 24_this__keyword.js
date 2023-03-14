// this is used when u have to access the elements of same object in same object.

let Person = {
  firstname: "harsh",
  lastname: "kumar",
  perdet: function () {
    console.log("hello my name is " + this.firstname + " " + this.lastname);
  },
  cardet: function () {
    console.log("hello i have " + car.model + " car of " + car.brand); // When u access oother object element then object name
  },
};

let car = {
  brand: "tata",
  model: "safari",
};
Person.perdet();
Person.cardet();
