function PalindromeChecker(numer) {
  let num = numer;
  let temp = num;
  let rev_numer = 0;
  while (temp > 0) {
    z = temp % 10;
    rev_numer = rev_numer * 10 + z;
    temp = Math.floor( temp / 10);
  }
  if (numer === rev_numer) {
    return true;
  } else {
    return false;
  }
}

console.log(PalindromeChecker(1211))