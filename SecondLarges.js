function SecondLargest(arr) {
  let largest = -1000;
  let second = -1000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] < largest) {
      second = arr[i];
    }
  }
  console.log("Second largest number is ", second);
}

SecondLargest([990, 3, 4, 7, 10, 4, 1]);
