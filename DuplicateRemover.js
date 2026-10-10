function DuplicateRemover(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let dupl = false;
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        dupl = true;
        break;
      }
    }
    if (dupl === false) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

DuplicateRemover([1, 2, 3, 4, 5, 6, 6, 9]);
