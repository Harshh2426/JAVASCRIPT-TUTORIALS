function comSel() {
  let min = 0,
    max = 2;
  let option = ["s", "w", "g"];
  let x = Math.floor(Math.random() * (max - min + 1)) + min;
  return option[x];
}
console.log(comSel());

let com = 0,
  user = 0;
for (let i = 0; i < 10; i++) {
  let x = prompt(
    "Enter ur choice : (Select between s for snake,w for water,g for gun)"
  );
  let y = comSel();
  if (x == y) {
    console.log("Same choice");
    continue;
  } else {
    if (x == "s" && y == "w") {
      console.log(`Congrats u win the round`);
      user++;
      console.log(`Points -> Computer : ${com} User : ${user}`);
    } else if (x == "s" && y == "g") {
      console.log(`Soory u lose the round`);
      com++;
      console.log(`Points -> Computer : ${com} User : ${user}`);
    } else if (x == "w" && y == "s") {
      console.log(`Soory u lose the round`);
      com++;
      console.log(`Points -> Computer : ${com} User : ${user}`);
    } else if (x == "w" && y == "g") {
      console.log(`Congrats u win the round`);
      user++;
      console.log(`Points -> Computer : ${com} User : ${user}`);
    } else if (x == "g" && y == "w") {
      console.log(`Soory u lose the round`);
      com++;
      console.log(`Points -> Computer : ${com} User : ${user}`);
    } else if (x == "g" && y == "s") {
      console.log(`Congrats u win the round`);
      user++;
      console.log(`Points -> Computer : ${com} User : ${user}`);
    }
    y = comSel();
  }
}
if (user > com) {
  console.log("Congrats! u are the final winner");
} else if (user < com) {
  console.log("Soory! u lose the game");
} else {
  console.log("Tied!");
}
