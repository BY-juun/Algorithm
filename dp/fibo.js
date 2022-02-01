const solve = (n) => {
    let dp = Array.from({length : n+1},()=>0);
    dp[0] = 0;
    dp[1] = 1;
    for(let i=2;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    console.log(dp[n]);
}

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let n = parseInt(input[0]);
    solve(n);
})
