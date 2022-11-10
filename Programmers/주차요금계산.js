function getMinutes(time) {
  const [hour, minutes] = time.split(":").map(Number);
  return hour * 60 + minutes;
}
function solution(fees, records) {
  var answer = [];
  const endTime = "23:59";
  const [defaultMinute, defaultPrice, unitMinute, unitPrice] = fees;
  const recordInfo = {};
  for (const record of records) {
    const [time, carNum, status] = record.split(" ");
    if (status === "IN") {
      if (!recordInfo[carNum]) recordInfo[carNum] = { time: getMinutes(time), status, acc: 0 };
      else recordInfo[carNum] = { ...recordInfo[carNum], time: getMinutes(time), status };
    } else {
      const { time: startTime, acc } = recordInfo[carNum];
      recordInfo[carNum] = { acc: acc + getMinutes(time) - startTime, status, time };
    }
  }
  for (const key of Object.keys(recordInfo)) {
    const { acc, status, time } = recordInfo[key];
    if (status === "IN") {
      recordInfo[key] = { acc: acc + getMinutes(endTime) - time, status: "OUT" };
    }
  }
  for (const key of Object.keys(recordInfo)) {
    const { acc } = recordInfo[key];
    if (acc <= defaultMinute) answer.push({ key, price: defaultPrice });
    else {
      answer.push({ key, price: defaultPrice + Math.ceil((acc - defaultMinute) / unitMinute) * unitPrice });
    }
  }
  return answer.sort((a, b) => Number(a.key) - Number(b.key)).map((v) => v.price);
}
