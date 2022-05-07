const obj = {};
function selectChoice(left, right, choice) {
  switch (choice) {
    case 1:
      obj[left] += 3;
      break;
    case 2:
      obj[left] += 2;
      break;
    case 3:
      obj[left] += 1;
      break;
    case 4:
      break;
    case 5:
      obj[right] += 1;
      break;
    case 6:
      obj[right] += 2;
      break;
    case 7:
      obj[right] += 3;
      break;
  }
}

function getResult() {
  let result = "";
  result = obj["R"] < obj["T"] ? (result += "T") : (result += "R");
  result = obj["C"] < obj["F"] ? (result += "F") : (result += "C");
  result = obj["J"] < obj["M"] ? (result += "M") : (result += "J");
  result = obj["A"] < obj["N"] ? (result += "N") : (result += "A");
  return result;
}

function solution(survey, choices) {
  var answer = "";

  const arr = ["R", "T", "C", "F", "J", "M", "A", "N"];
  arr.forEach((value) => {
    obj[value] = 0;
  });

  for (let i = 0; i < survey.length; i++) {
    const [left, right] = survey[i].split("");
    const choice = choices[i];
    selectChoice(left, right, Number(choice));
  }
  answer = getResult();
  return answer;
}
