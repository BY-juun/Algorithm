function solution(stones, k) {
  var answer = 0;
  let left = 0;
  let right = 200000000;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let cnt = getCnt(mid);

    if (cnt < k) left = mid + 1;
    else right = mid - 1;
  }

  return left;
  function getCnt(mid) {
    let result = 0;
    let cnt = 0;
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] <= mid) {
        cnt++;
        result = Math.max(result, cnt);
      } else {
        cnt = 0;
      }
    }
    return result;
  }

  return answer;
}
