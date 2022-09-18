function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const 괄호 = s[i];
    if (괄호 === "(") stack.push(0);
    else {
      if (stack.length > 0) stack.pop();
      else return false;
    }
  }
  return stack.length === 0 ? true : false;
}
