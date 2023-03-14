// -> U can create object inside object and access them

let person = {
  name: "harry",
  age: 15,
  personalInfo: {
    position: "sde",
    address: {
      city: "Ghaziabad",
      country: "India",
    },
  },
};

console.log(person);
console.log(person.personalInfo);
console.log(person.personalInfo.address.city);
