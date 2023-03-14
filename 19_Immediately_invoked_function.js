// Immediately Invoked function : used where function should be required for short time

(function () {
  console.log("hello world");
})();

// This is generally used when u export some external files and u don't know the name of variables used in that file(which u export) then there are chances of same variable or function name.then u should used that file in immediately invoked function.

let msg = "Hello world immediately invoked function";
function show() {
  console.log(msg);
}
show();

// -> This create an error in index file which can be shown in browser console file.
