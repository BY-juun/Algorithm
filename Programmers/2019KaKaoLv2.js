function solution(N, stages) {
  var answer = [];
  const User = Array.from({ length: N }, () => 0);
  const Fail = Array.from({ length: N }, () => 0);
  const result = Array.from({ length: N }, () => new Object());

  for (let x of stages) {
    if (x !== N + 1) {
      for (let i = 0; i < x; i++) User[i]++;
      Fail[x - 1]++;
    } else for (let i = 0; i < User.length; i++) User[i]++;
  }

  for (let i = 0; i < User.length; i++) {
    result[i].idx = i + 1;
    result[i].rate = Fail[i] / User[i];
  }

  result.sort((a, b) => b.rate - a.rate);

  answer = result.map((value) => value.idx);

  return answer;
}
