
function solution(n,list){
    list.sort((a,b)=>{
        if(a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    let answer = 0, endTime = 0;
    for(let meeting of list){
        if(endTime <= meeting[0]){
            answer++;
            endTime = meeting[1];
        }
    }
    console.log(answer);
}


const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let n = parseInt(input[0]); 
    input = input.slice(1);
    let list = []; 
    for(let i of input){ 
        list.push(i.split(' ').map((el) => parseInt(el))); 
    } 
    solution(n, list); 
});

