function Armstrong(number) {
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    rem = temp % 10;
    sum = sum + rem * rem * rem;
    temp = Math.floor(temp / 10);
  }
  if (number === sum) {
    return true;
  } else {
    return false;
  }
}

console.log(Armstrong(153));