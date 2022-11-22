function canCompress(arr) {
  const val = arr[0][0];
  for (const row of arr) if (!row.every((v) => v === val)) return false;
  return true;
}

function makeArr(rowStart, rowLimit, colStart, colLimit, arr) {
  const result = [];
  for (let i = rowStart; i < rowLimit; i++) {
    const row = [];
    for (let j = colStart; j < colLimit; j++) row.push(arr[i][j]);
    result.push(row);
  }
  return result;
}

function divide(arr) {
  const length = arr.length;
  const result = [];
  result.push(makeArr(0, length / 2, 0, length / 2, arr));
  result.push(makeArr(length / 2, length, 0, length / 2, arr));
  result.push(makeArr(0, length / 2, length / 2, length, arr));
  result.push(makeArr(length / 2, length, length / 2, length, arr));

  return result;
}

function solution(arr) {
  var answer = [0, 0];
  let arrList = [arr];
  while (arrList.length !== 0) {
    const curArr = arrList.shift();
    if (canCompress(curArr)) answer[curArr[0][0]]++;
    else {
      const divideArr = divide(curArr);
      if (divideArr[0].length === 1) {
        divideArr.forEach((v) => {
          answer[v[0]]++;
        });
      } else
        divideArr.forEach((arr) => {
          arrList.push(arr);
        });
    }
  }
  return answer;
}
