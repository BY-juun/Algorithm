let fs = require('fs');
let [frist,i1,i2,i3,i4,i5,i6,i7,i8,i9,i10] = fs.readFileSync('input.txt').toString().trim().split('\n');
const arr0 = frist.split(' ').map((value) => parseInt(value))
let arr = [];
arr.push(parseInt(i1));
arr.push(parseInt(i2));
arr.push(parseInt(i3));
arr.push(parseInt(i4));
arr.push(parseInt(i5));
arr.push(parseInt(i6));
arr.push(parseInt(i7));
arr.push(parseInt(i8));
arr.push(parseInt(i9));
arr.push(parseInt(i10));
arr.sort((a,b)=>b-a);
let totalMoney = arr0[1];
let answer = 0;
for(let i=0;i<arr.length;i++){
    if(totalMoney == arr[i]){
        answer ++;
        break;
    }
    else if(totalMoney > arr[i]){
        answer++;
        totalMoney -= arr[i];
        i--;
    }
}
console.log(answer);




