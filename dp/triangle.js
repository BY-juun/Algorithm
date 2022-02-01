const solve = (arr) => {
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(j-1 < 0){
                arr[i][j] += arr[i-1][j];
            }    
            else if(j+1 === arr[i].length){
                arr[i][j] += arr[i-1][j-1]
            }
            else{
                if(arr[i-1][j-1] > arr[i-1][j]) arr[i][j] += arr[i-1][j-1];
                else arr[i][j] += arr[i-1][j];
            }
        }
    }
    console.log(Math.max(...arr[arr.length-1]));
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
        arr.push(input[i+1].split(" ").map((value)=>Number(value)));
    }
    solve(arr);
})
