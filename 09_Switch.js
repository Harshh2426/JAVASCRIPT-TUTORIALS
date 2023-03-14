let x = 6;
switch (x) {
  
  case 1:
    console.log("1");
    break;

  case 2:
    console.log("2");
    break;

  // when u want to combine to two or more case
  case 6: 
  case 3:
    console.log("3 or 6");
    break;

  case 4:
  case 5:
    console.log("4 or 5");
    break;

  default:
    console.log("You enter the number greater than 2");
}
