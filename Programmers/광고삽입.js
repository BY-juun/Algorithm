function solution(play_time, adv_time, logs) {
  const log = [];

  logs.forEach((element) => {
    const [start, end] = element.split("-");
    log.push({ time: convertTimeToSec(start), type: "start" });
    log.push({ time: convertTimeToSec(end), type: "end" });
  });

  log.sort((a, b) => a.time - b.time);

  console.log(log);
  var answer = "";
  return answer;

  function convertTimeToSec(time) {
    const [hour, min, sec] = time.split(":").map(Number);
    return hour * 60 * 60 + min * 60 + sec;
  }
}

solution("02:03:55", "00:14:15", [
  "01:20:15-01:45:14",
  "00:40:31-01:00:00",
  "00:25:50-00:48:29",
  "01:30:59-01:53:29",
  "01:37:44-02:02:30",
]);
