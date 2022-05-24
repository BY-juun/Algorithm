function solution(n,a,b)
{
    var answer = 1;

    while(true) {
        const nextA = Math.floor(a/2) + a%2;
        const nextB = Math.floor(b/2) + b%2;
        if(nextA === nextB) return answer;
        a = nextA;
        b = nextB;
        answer++;
    }
    
    return answer;
}   