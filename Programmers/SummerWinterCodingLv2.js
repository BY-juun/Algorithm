function gcd(w, h) {
  const mod = w % h;
  if (mod === 0) {
    return h;
  }

  return gcd(h, mod);
}

function solution(w, h) {
  var answer = 1;
  const GCD = gcd(w, h);
  answer = w * h - GCD * (w / GCD - 1 + h / GCD);
  return answer;
}
