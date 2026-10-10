a = [2, 1, 3, 0, 4];

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length - 1; j++) {
    if (a[j + 1] < a[j]) {
      temp = a[j];
      a[j] = a[j + 1];
      a[j + 1] = temp;
    }
  }
}
console.log(a);
