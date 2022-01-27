let fs = require('fs');
let [frist,second] = fs.readFileSync('input.txt').toString().trim().split('\n');
const arr = second.split(' ').map((value) => parseInt(value)).sort((a,b) => a-b);

let dy = Array.from({length : arr.length},() => 0);
dy[0] = arr[0];

let answer = dy[0];
for(let i=1;i<arr.length;i++){
    dy[i] = dy[i-1] + arr[i];
    answer += dy[i];
    
}
console.log(answer);
