// a number is generated and u have to guesss the correct number

let min=1;
let max=100;
let x=(Math.floor(Math.random()*(max-min+1)))+min;
console.log(x);

let i=0;
let num=prompt();
while(true && i<=100){
  if(num==x){
    console.log("You enter the correct value "+(100-i));
    break;
  }
  else if(num>x){
    console.log("num>x");
    num=prompt();
  }
  else{
    console.log("num<x");
    num=prompt();
  }
  i++;
}