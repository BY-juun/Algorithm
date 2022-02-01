const solve = (num,target,count) => {
    if(num === target){
        console.log(count+1);
        process.exit();
    }
    else if(num > target) return;  
    else{
        solve(num*2,target,count+1);
        solve(num*10+1,target,count+1);
    }
}

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let arr = input[0].split(" ").map((value) => Number(value));
    let count = 0;
    solve(arr[0],arr[1],count);
    console.log(-1);
})
