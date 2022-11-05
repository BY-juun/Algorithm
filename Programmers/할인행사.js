function solution(want, number, discount) {
  var answer = 0;
  const wants = {};
  for (let i = 0; i < want.length; i++) {
    wants[want[i]] = number[i];
  }
  for (let end = 10; end <= discount.length; end++) {
    const start = end - 10;
    let temp = { ...wants };
    discount.slice(start, end).forEach((item) => {
      if (temp[item]) {
        if (temp[item] === 1) delete temp[item];
        else temp[item]--;
      }
    });
    if (Object.keys(temp).length === 0) answer++;
  }
  return answer;
}
