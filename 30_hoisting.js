// -> Hoisting is the process in which js compiler put all the declaraion at the top of the scope(global or local scope)
// -> The variable is use before their declaration

// -> Use with methods
hello();

function hello() {
  console.log("hello world");
}

// -> IMPORTANT : When u declare any variable with var then it assign it with undefined
// -> IT IS APPLICABLE IN ALL LET,VAR(Not in const)

var x;
console.log(x);


// -> Use with variables

// -> In js,all the declaration are put at the top(only declaration)

// 'var x' is automtically put at that point.
x = 7;
console.log(x);
var x;

// -> The result is undefined because only 'var z' go at the top not other line so it assign the undefined value.
console.log(z);
z = 2;
var z;

// -> If u use both initialization and declaration both then only declaration part is going at the top.
console.log(a);
var a = 5; // ans is undefined because only 'var a' part is going at the top.


// -> There is an error with let and const because it cannot assign automatically undefined value.

// m=4;
// console.log(m);
// let m;


// "use strict" : to open the strict mode : after this u cann't use direct declaration.
