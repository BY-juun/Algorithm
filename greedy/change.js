
const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let money = parseInt(input[0]);
    solution(money);
});

function solution(money){
    let change = [500,100,50,10,5,1];
    money = 1000-money;
    let answer = 0;
    for(let i=0;i<change.length;i++){
        while(money >= change[i]){
            money -= change[i];
            answer++;
        }
    }
    console.log(answer);
}   
