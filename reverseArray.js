let j = ['9','8','7','6','5','4'];
console.log(j)
let left = 0;
let right = j.length-1;
console.log(right)
while(left<right){
  let temp = j[left];
  j[left] = j[right];
  j[right] = temp;
  left++;
  right--;
}
console.log(j);
