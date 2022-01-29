const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let n = BigInt(input[0]);
    let dist = input[1].split(' ').map((value)=>BigInt(value));
    let price = input[2].split(' ').map((value)=>BigInt(value));

    let answer = dist[0] * price[0];
    let curPrice = price[0];
    for(let i=1;i<dist.length;i++){
        if(curPrice > price[i]) curPrice = price[i];
        answer+=(curPrice * dist[i]);
    }
    console.log(String(answer));
});

