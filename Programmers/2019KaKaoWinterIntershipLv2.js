function solution(s) {
  var answer = [];
  let arr = [];
  let temp = "";
  s = s.substr(1, s.length - 2);
  for (let i = 0; i < s.length; i++) {
    if ((s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt()) || s[i] === ",") {
      temp += s[i];
    } else if (s[i] === "{") temp = [];
    else if (s[i] === "}") arr.push(temp);
  }
  arr.sort((a, b) => a.length - b.length);
  arr = arr.map((value) => value.split(","));

  for (let array of arr) {
    for (let elem of array) {
      if (!answer.includes(elem)) {
        answer.push(elem);
      }
    }
  }
  answer = answer.map((value) => Number(value));

  return answer;
}
