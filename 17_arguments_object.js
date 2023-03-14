// -> u can access the arguments by assuming it as an arguments array
function sum() {
  console.log(arguments.length);
}

sum(2, 3); // Here the no of arguments are 2
sum(3, 4, 5); // Here the no of arguments are 3
sum(1, 2, 3, 4, 5, 6); // Here the no of arguments are 6

// -> u can also access the elements of arguments

function Access() {
  console.log("The element at index 2 is : " + arguments[1]);
}
Access(1, 2, 3, 4, 5, 6, 7);

// -> when u don't know the no of arguments so use arguments object

function add() {
  if (arguments.length == 0) {
    console.log("No elements present");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
  }
}
add(1, 2, 3, 4, 5, 6);

// -> In above example,we can access arguments by using arguments array

// -> But we cannot access arguments using argumnets array inside fat function.

let su = () => {
  if (arguments.length == 0) {
    console.log("No elements present");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
  }
};
su(1, 2, 3, 4, 5, 6); // This raises an error.

// -> We can use spread operator in fat arrow  function to solve the argument array problem.

let x = (...n) => {
  console.log(n);
};

x(4, 6, 7, 8);

// -> You should not use arrow functions to create methods inside objects.

// -> You cannot use an arrow function as a constructor.
