const solve = (n) => {
    let dp = Array.from({length : n+1},()=>0);
    dp[1] = 1;
    dp[2] = 3;
    for(let i=3;i<n+1;i++){
        dp[i] = (dp[i-1] + dp[i-2]*2)%10007;
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
