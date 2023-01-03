function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    swap(arr, minIndex, i);
  }
  console.log(arr);
}

sort(Array.from({ length: 20 }, () => Math.floor(Math.random() * 101)));
