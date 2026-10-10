function StringPalindrom(strin) {
  let rev_strin = "";
  for (let i = strin.length - 1; i >= 0; i--) {
    rev_strin += strin[i];
  }
  if (rev_strin === strin) {
    console.log("Palindrome.");
  } else {
    console.log("not palindrome");
  }
}

StringPalindrom("afternoon");
