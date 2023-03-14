// It is basically used to spread elements.

// It is used to copy the elements.

let arr = [1, 2, 3, 4];

let arr2 = [...arr];
console.log(arr2);

// It is basically used to enter the elements in the array in user defined position.

let arr3 = [1, 2, 3, ...arr2];
console.log(arr3);

let arr4 = [1, 2, ...arr2, 3, 5];
console.log(arr4);

let arr5 = [...arr2, 1, 2, 3];
console.log(arr5);

// In object

let obj1 = {
  name: "harry",
  age: 5,
};
let obj2 = {
  name: "ram",
  age: 15,
};
let obj3 = { ...obj2, hobby: "games" };
console.log(obj3);
let obj4 = { gender:"male",...obj2, hobby: "games" };
console.log(obj4);
let obj5 = {  gender:"male", hobby: "games" ,...obj2};
console.log(obj5);
