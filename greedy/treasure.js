let fs = require('fs');
let [first,second,third] = fs.readFileSync('input.txt').toString().trim().split('\n');
const N = parseInt(first);
const A = second.split(' ').map((value) => parseInt(value)).sort((a,b)=>a-b);
let B = third.split(' ').map((value) => parseInt(value)).sort((a,b)=>b-a);
let answer = 0;
for(let i=0;i<N;i++){
    answer += A[i] * B[i];
}
console.log(answer);