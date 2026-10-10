function CountArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    if (arr[i] === -1) {
      continue;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
        arr[j] = -1;
      }
    }
    console.log("count of ", arr[i], " is ", count);
  }
}

CountArrayElements([2, 4, 6, 2, 4]);
