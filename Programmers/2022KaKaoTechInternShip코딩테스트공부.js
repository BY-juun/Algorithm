function solution(alp, cop, problems) {
  let maxAlp = alp;
  let maxCop = cop;
  for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
    maxAlp = maxAlp < alp_req ? alp_req : maxAlp;
    maxCop = maxCop < cop_req ? cop_req : maxCop;
  }

  const dp = Array.from({ length: maxAlp + 1 }, () =>
    Array.from({ length: maxCop + 1 }, () => Number.MAX_SAFE_INTEGER)
  );
  dp[alp][cop] = 0;

  for (let i = alp; i <= maxAlp; i++) {
    for (let j = cop; j <= maxCop; j++) {
      if (i < maxAlp) dp[i + 1][j] = dp[i + 1][j] < dp[i][j] + 1 ? dp[i + 1][j] : dp[i][j] + 1;
      if (j < maxCop) dp[i][j + 1] = dp[i][j + 1] < dp[i][j] + 1 ? dp[i][j + 1] : dp[i][j] + 1;
      for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
        if (i >= alp_req && j >= cop_req) {
          const nextAlp = i + alp_rwd > maxAlp ? maxAlp : i + alp_rwd;
          const nextCop = j + cop_rwd > maxCop ? maxCop : j + cop_rwd;
          dp[nextAlp][nextCop] = dp[nextAlp][nextCop] < dp[i][j] + cost ? dp[nextAlp][nextCop] : dp[i][j] + cost;
        }
      }
    }
  }
  return dp[maxAlp][maxCop];
}
