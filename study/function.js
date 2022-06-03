function solution(arr) {
  const obj = {};
  const answer = [];
  arr.forEach((v) => {
    if (obj[v]) obj[v] += 1;
    else obj[v] = 1;
  });
  for (const key in obj) {
    if (obj[key] !== 1) answer.push(obj[key]);
  }

  console.log(answer.length === 0 ? -1 : answer);
}

solution([3, 5, 7, 9, 1]);
