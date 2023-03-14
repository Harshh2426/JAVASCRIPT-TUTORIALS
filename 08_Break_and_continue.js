// -> Break is used to exit the loop in which actually they are.Not for all loop which are running.

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}

// -> Continue to skip the iteration

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
