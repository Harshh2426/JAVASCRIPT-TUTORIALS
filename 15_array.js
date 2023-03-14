// -> difference between array and object is array uses numbered index.
// -> array may contain multiple datatype values.
// -> it is basically used to store multiple value in sinle element.

let x = [1, 2, "hello", 14.345, true];
let a = [1, 2, 3, 4, 5, 7, 8];
console.log(a[4]);
console.log(a[10]);

// -> datatyppe of array
console.log(typeof x);

// -> to check whether the given variable is array or not
console.log(Array.isArray(x));
//or
console.log(x instanceof Array);


// -> if at a particular index element is not present then undefined is given.

// -> Convert an array into string(comma seperated)

let h=a.toString();
console.log(h);
console.log(h[1]); // string with comma seperated
console.log(typeof h);


// -> Join array element to string in user deined seperator.

let e=a.join("*");
console.log(e);
console.log(typeof e);
console.log(a.join("-"));

// -> push : add the elemnet in the last
a.push(9);
console.log(a);

// -> pop : remove the elemnet from the last
let d = a.pop();
console.log(d);
console.log(a);

// -> unshift : add the element in the start
a.unshift(10);
console.log(a);

// -> shift : remove the element in the start
let g = a.shift();
console.log(a);
console.log(g);

// -> splice: used for multiple deletion and insertion first delete then insert.
let ss=["Ram","shyam","rohan"];
let ff=ss.splice(1, 2,"Lemon","Kiwi");
console.log(ss);
console.log(ff); // return deleted elements

// -> slice method is used for slicing piece of array.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus); // if u don't use end argument then it return all the element after that.

let ne = fruits.slice(1,2);
console.log(ne); // it remove only between 1 and 2(not included).

// -> concat
let s = a.concat("hello");
console.log(s);

// -> 2D array

let bookWithPages = [
  ["cn", 485],
  ["dsa", 458],
];
console.log(bookWithPages);

// -> reverse

let rev=[1,2,4,5,3,200];
console.log(rev.reverse());

// -> sort
// it sort on the basis of string.
console.log(rev.sort()); 

// for integer sorting use compare function.
console.log(rev.sort(function(a,b){return a-b}));

// for finding max value
console.log(Math.max.apply(null,rev));

// indexof
let he=[1,2,3,4,5,6,7];
console.log(he.indexOf(-6));
console.log(he.lastIndexOf(6));

// keys
// -> return index and element in a 2d array
let key=he.entries();
for(let x of key){
  console.log(x);
}
//


// includes
console.log(he.includes(3));