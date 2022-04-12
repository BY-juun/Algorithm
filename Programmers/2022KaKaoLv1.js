function solution(id_list, report, k) {
  var answer = [];
  let arr = [];
  for (let x of id_list) {
    arr.push({
      name: x,
      reporting: [],
      reported: [],
      result: 0,
    });
  }
  for (let x of report) {
    const [reportUser, reportedUser] = x.split(" ");
    const reportingUserData = arr.filter((value) => value.name === reportUser);
    const reportedUserData = arr.filter((value) => value.name === reportedUser);
    if (!reportingUserData[0].reporting.includes(reportedUser)) {
      reportingUserData[0].reporting.push(reportedUser);
      reportedUserData[0].reported.push(reportUser);
    }
  }

  for (let x of arr) {
    if (x.reported.length >= k) {
      const reportUser = arr.filter((value) => value.reporting.includes(x.name));
      reportUser.forEach((value) => value.result++);
    }
  }

  for (let x of arr) {
    answer.push(x.result);
  }

  return answer;
}
