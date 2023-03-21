// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function calculator(a, b, action) {
    let result = action(a,b);
    console.log(result);
    return result;
}

// add함수주소값을 action에 전달한다. 
calculator(1,2, add);
calculator(1,2, multiply);