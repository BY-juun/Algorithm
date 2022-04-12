function solution(new_id) {
  var answer = "";

  //1단계
  new_id = new_id.toLowerCase();
  let arr = new_id.split("");
  console.log(arr.join(""));

  //2단계
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-") continue;
    if (arr[i] === "_") continue;
    if (arr[i] === ".") continue;
    if (arr[i].charCodeAt() >= "0".charCodeAt() && arr[i].charCodeAt() <= "9".charCodeAt()) continue;
    if (arr[i].charCodeAt() >= "a".charCodeAt() && arr[i].charCodeAt() <= "z".charCodeAt()) continue;
    arr[i] = "";
  }
  console.log(arr.join(""));
  arr = arr.join("").split("");

  //3단계
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ".") {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] !== ".") break;
        else arr[j] = "";
      }
    }
  }
  console.log(arr.join(""));
  arr = arr.join("").split("");

  //4단계
  if (arr[0] === ".") arr[0] = "";
  if (arr[arr.length - 1] === ".") arr[arr.length - 1] = "";
  console.log(arr.join(""));
  arr = arr.join("").split("");

  //5단계
  if (arr.length === 0) arr.push("a");
  console.log(arr.join(""));

  //6단계
  if (arr.length >= 16) {
    arr = arr.slice(0, 15);
    if (arr[arr.length - 1] === ".") arr[arr.length - 1] = "";
  }
  console.log(arr.join(""));
  arr = arr.join("").split("");

  //7단계
  if (arr.length <= 2) {
    const lastChar = arr[arr.length - 1];
    while (true) {
      arr.push(lastChar);
      if (arr.length === 3) break;
    }
  }
  console.log(arr.join(""));

  answer = arr.join("");

  return answer;
}
