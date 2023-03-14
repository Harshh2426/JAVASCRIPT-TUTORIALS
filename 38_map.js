let a = new Map();

// or 

let b = new Map([
    [1,"Harsh"],
    [2,"Ram"]
]);


// -> Set
a.set("Ram","1");
a.set("Shyam","2");

// -> Get
console.log(a);
console.log(a.get("Ram"));

// -> Size
console.log(a.size)

// -> delete
a.delete("Ram");
console.log(a);

// -> has
console.log(a.has("Ram"));

// -> enteries
let c=a.entries();
console.log(c);