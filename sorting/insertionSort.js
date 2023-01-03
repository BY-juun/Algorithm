function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let left = i - 1;
    while (left >= 0 && arr[left] > cur) {
      swap(arr, left, left + 1);
      cur = arr[left];
      left--;
    }
  }
  console.log(arr);
}

sort(Array.from({ length: 20 }, () => Math.floor(Math.random() * 101)));
