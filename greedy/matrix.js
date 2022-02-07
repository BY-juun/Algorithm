const solve = (matrixA, matrixB,n,m) => {
    let answer = 0;
    for(let i=0;i<n-2;i++){
        for(let j=0;j<m-2;j++){
            if(matrixA[i][j] !== matrixB[i][j]){
                convert(matrixA,i,j);
                answer++;
            }
        }
    }
    for(let i=0; i<n; i++){
        for(let j=0;j<m;j++){
            if(matrixA[i][j] !== matrixB[i][j]){
                answer = -1;
                break;
            }
        }
    }
    console.log(answer);
};

const convert = (matrixA, row, col) => {
    for(let i=row;i<row+3;i++){
        for(let j=col;j<col+3;j++){
            matrixA[i][j] = matrixA[i][j] === 1 ? 0 : 1;
        }
    }
};

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let firstLine = [];
    input[0].split(" ").map((value)=>firstLine.push(Number(value)));
    let n = firstLine[0], m = firstLine[1];
    input = input.slice(1);
    let matrixA = [];
    let matrixB = [];
    for(let i=0;i<n;i++){
        let temp = [];
        input[i].split("").map((value)=>temp.push(Number(value)));
        matrixA.push(temp);
    }
    input = input.slice(n);
    for(let i=0;i<n;i++){
        let temp = [];
        input[i].split("").map((value)=>temp.push(Number(value)));
        matrixB.push(temp);
    }
    solve(matrixA,matrixB,n,m);
});

