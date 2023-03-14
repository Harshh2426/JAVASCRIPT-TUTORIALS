let book = ["Advance Js", 200, 150];

// In earler version,for access book elements.
let book_name = book[0];
let book_price = book[1];
let book_page = book[2];

// In new method,for access array elements
let [bok_name, bok_price, bok_page] = book;
console.log(bok_name);

// For Object destructing
let emp = {
  name: "ram",
  age: 2,
  salary: 12000,
};
// let { name, age, salary } = emp;
// console.log(name);

// for changing the access name
// let { name: title, age, salary } = emp;
// console.log(title);

// for giving the default value use
let { name, age, salary = 23000 } = emp;
console.log(salary);
