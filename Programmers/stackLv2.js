function solution(s) {
  var answer = -1;
  let stack = [];
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  answer = stack.length === 0 ? 1 : 0;
  return answer;
}
