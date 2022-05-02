let graph;
var answer = [];

function rotate(x1,y1,x2,y2){
    let stack = [];
    x1-=1;
    y1-=1;
    x2-=1;
    y2-=1;

    for(let i=y1; i<y2; i++) stack.push(graph[x1][i]);
    for(let i=x1; i<x2; i++) stack.push(graph[i][y2]);
    for(let i=y2; i>y1; i--) stack.push(graph[x2][i]);
    for(let i=x2; i>x1; i--) stack.push(graph[i][y1]);
    
    answer.push(Math.min(...stack));
    
    stack.unshift(stack.pop());
    
    for(let i=y1; i<y2; i++) (graph[x1][i]) = stack.shift();
    for(let i=x1; i<x2; i++) (graph[i][y2]) = stack.shift();
    for(let i=y2; i>y1; i--) (graph[x2][i]) = stack.shift();
    for(let i=x2; i>x1; i--) (graph[i][y1]) = stack.shift();
}

function solution(rows, columns, queries) {
    graph = Array.from({length : rows}, () => Array.from({length : columns}, () => 0));
    let count = 1;
    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            graph[i][j] = count;
            count++;
        }
    }
    
    for(let x of queries){
        const [x1,y1,x2,y2] = x;
        rotate(x1,y1,x2,y2);
    }

    return answer; 
}