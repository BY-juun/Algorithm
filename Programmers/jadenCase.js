function solution(s) {
  return s
    .split(" ")
    .map((str) => {
      if (str === "") return str;
      return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();
    })
    .join(" ");
}
