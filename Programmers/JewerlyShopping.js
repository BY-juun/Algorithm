function solution(gems) {
  const resultGem = [...new Set(gems)];
  let start = 0;
  let end = 0;
  var answer = [0, gems.length];
  const pickedGem = new Map();
  while (end <= gems.length && start <= end) {
    if (resultGem.length === pickedGem.size) {
      if (end - start - 1 < answer[1] - answer[0]) answer = [start + 1, end];
      if (pickedGem.get(gems[start]) === 1) pickedGem.delete(gems[start]);
      else pickedGem.set(gems[start], pickedGem.get(gems[start]) - 1);
      start++;
    } else {
      pickedGem.set(gems[end], pickedGem.get(gems[end]) ? pickedGem.get(gems[end]) + 1 : 1);
      end++;
    }
  }
  return answer;
}
