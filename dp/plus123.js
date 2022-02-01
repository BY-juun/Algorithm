const solve = (arr) => {
    for(let x of arr){
        let dp = Array.from({length : x+1},()=>0);
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 4;
        for(let i=4;i<=x;i++){
            dp[i] = dp[i-3] + dp[i-2] + dp[i-1];
        }
        console.log(dp[x]);
    }
}

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let n = parseInt(input[0]);
    let arr = [];
    for(let i=0;i<n;i++){
        arr.push(parseInt(input[i+1]));
    }
    solve(arr);
})
