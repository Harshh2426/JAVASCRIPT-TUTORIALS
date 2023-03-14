let a = new Set();
console.log(a);
a.add(3);
a.add(1);
a.add(2);
console.log(a);

a.delete(1);
console.log(a);

if(a.has(2)){
   console.log("Yes")
}
else{
    console.log("No")
}

a.forEach(function(element,index,array){
    console.log(array);
})

console.log(a.values());

console.log(a.size)