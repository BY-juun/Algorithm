function solution(s) {
  let result = "";
  s = s.split("");
  let i = 0;
  while (i < s.length) {
    if (s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt()) {
      result += s[i];
      i++;
    } else if (s[i] === "z") {
      result += "0";
      i += 4;
    } else if (s[i] === "o") {
      result += "1";
      i += 3;
    } else if (s[i] === "t") {
      if (s[i + 1] === "w") {
        result += "2";
        i += 3;
      } else if (s[i + 1] === "h") {
        result += "3";
        i += 5;
      }
    } else if (s[i] === "f") {
      if (s[i + 1] === "o") {
        result += "4";
        i += 4;
      } else if (s[i + 1] === "i") {
        result += "5";
        i += 4;
      }
    } else if (s[i] === "s") {
      if (s[i + 1] === "i") {
        result += "6";
        i += 3;
      } else if (s[i + 1] === "e") {
        result += "7";
        i += 5;
      }
    } else if (s[i] === "e") {
      result += "8";
      i += 5;
    } else if (s[i] === "n") {
      result += "9";
      i += 4;
    }
  }
  var answer = 0;
  answer = Number(result);
  return answer;
}
