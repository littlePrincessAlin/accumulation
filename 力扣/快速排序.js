function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let centerIndex = Math.floor(arr.length / 2);

  let centerItem = arr.splice(centerIndex, 1)[0];

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (centerItem > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(centerItem, quickSort(right));
}
