function solution(n, times) {
  var answer = 0;
  let left = 0,
    right = Math.max(...times) * n;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    console.log(left, right, mid);
    let canTreat = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    if (canTreat < n) left = mid + 1;
    else right = mid - 1;
  }
  answer = left;
  return answer;
}
