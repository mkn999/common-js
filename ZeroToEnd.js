function ZeroToLastMine(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      newArr.push(arr[i]);
    }
  }
  let elem = arr.length - newArr.length;
  for (let i = 0; i < elem; i++) {
    newArr.push(0);
  }
  console.log(newArr);
}

function ZeroToLastOptimal(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[j] = arr[i];
      j++;
    }
  }

  while (j < arr.length) {
    arr[j] = 0;
    j++;
  }

  console.log(arr);
}

ZeroToLastMine([0, 2, 0, 4, 3, 1]);
ZeroToLastOptimal([0, 2, 0, 4, 3, 1]);
