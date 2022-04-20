function parsing(num, s) {
  let returnString = "";
  let cnt = 1;
  for (let i = 0; i < s.length; i += num) {
    const cur = s.substr(i, num);
    const next = s.substr(i + num, num);
    if (cur === next) cnt++;
    else {
      returnString = cnt > 1 ? returnString + cnt + cur : returnString + cur;
      cnt = 1;
    }
  }
  return returnString.length;
}

function solution(s) {
  var answer = s.length;
  for (let i = 1; i < Math.floor((s.length + 1) / 2) + 1; i++) {
    const result = parsing(i, s);
    if (result < answer) answer = result;
  }
  return answer;
}
