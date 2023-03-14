// -> In js random generates number b/w 0-1

let x = Math.random();
console.log(x);
// -> It generate a no between 0 - 1

// -> to get a no between 0-9(her the no comes between 0-(x-1))
console.log(Math.floor(Math.random() * 10));

// -> to generate no between 15-25 use(here 15 shows but 25 not range is between (15-24))
console.log(Math.floor(Math.random() * (25 - 15)) + 15);

// -> to generate no between 15-25 use(here 15 shows and 25 also show range is between (15-25))
console.log(Math.floor(Math.random() * (25 - 15 + 1)) + 15);
