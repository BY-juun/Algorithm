function isDivider(num, array) {
  return array.every((value) => value % num === 0);
}

function isNotDivider(num, array) {
  return array.every((value) => value % num !== 0);
}

function getMin(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  arr.forEach((v) => {
    if (v < min) min = v;
  });
  return min;
}

function getDivider(array) {
  const divider = [];
  for (let i = getMin(array); i >= 2; i--) {
    if (isDivider(i, array)) divider.push(i);
  }
  return divider;
}

function solution(arrayA, arrayB) {
  var answer = 0;

  const dividers_A = getDivider(arrayA);
  const dividers_B = getDivider(arrayB);

  for (const v of dividers_A) {
    if (v <= answer) break;
    if (arrayB.length > 0 && isNotDivider(v, arrayB) && v > answer) {
      answer = v;
      break;
    }
  }

  for (const v of dividers_B) {
    if (v <= answer) break;
    if (arrayA.length > 0 && isNotDivider(v, arrayA) && v > answer) {
      answer = v;
      break;
    }
  }

  return answer;
}
