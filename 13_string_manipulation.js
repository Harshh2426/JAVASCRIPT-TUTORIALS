// -> String is basically an array of character

let s = "   hello am I am harry  ";
console.log(s);

// -> For length
console.log(s.length);

// -> Extractig string parts
console.log(s.slice(4, 7));
console.log(s.slice(4));
console.log(s.substr(4, 3));
console.log(s.substring(4, 7));
console.log(s.slice(-12));

// -> Replace
console.log(s.replace("am", "not"));
console.log(s.replaceAll("am", "not"));

// -> Uppercase
let f = s.toUpperCase();
console.log(f);

// -> Lowercase
let g = s.toLowerCase();
console.log(g);

// -> Concat
console.log(s.concat(" ", "world", " ", "Raone"));

// -> trim
console.log(s.trim());
console.log(s.trimStart());
console.log(s.trimEnd());

// -> pad
let stt="a";
console.log(stt.padStart(4,'x'));
console.log(stt.padEnd(4,'x'));

// -> conversion of string to array seperated on the basis of user;
let d = "Hello i am harry";
console.log(d.split(" "));

// or use from
console.log(Array.from(d));

// -> index
console.log(s.indexOf("am"));
console.log(s.lastIndexOf("am"));

// -> search
console.log(s.search("am"));
//-> There is a diff between indexof and search,In indexOf there is additional feature where u can enter starting index.

// -> includes
let ss="hello world.";
console.log(ss.includes('hello'));

// -> startwith
console.log(ss.startsWith('hello'));

// -> endwith
console.log(ss.endsWith('.'));
