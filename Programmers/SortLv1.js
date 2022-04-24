function solution(array, commands) {
  var answer = [];
  for (let x of commands) {
    const [i, j, k] = x;
    let tempArr = [...array];
    tempArr = tempArr.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(tempArr[k - 1]);
  }
  return answer;
}
