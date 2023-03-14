// -> This create an error in console

let msg="helper hellow world";
let show = function () {
  console.log(msg);
};
show();

// -> for avoiding error, us immediately invoked function

(function show() {
  console.log("hello world");
})();
