// 퀴즈!
let num = 3;

// num의 숫자가 짝수이면 👍,  홀수라면 👎을 출력하도록

// if문을 이용
if(num%2 == 0) {
    console.log('👍');
}else{
    console.log('👎');
}

// 삼항연산자 이용
result = num%2 == 0 ? '👍' : '👎';
console.log(result);