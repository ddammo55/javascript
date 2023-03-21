// 1. 함수 선언문 function name() { }
// 2. 함수 표현식 const name = function () { }
// 객체를 변수에 넣는다.
// 무명함수 : 함수의 이름이없고 변수이름만 있다.
let add = function(a, b) {
    return a + b;
};
console.log(add(1,2));

// 화살표 함수 const name = () => { }
add2 = (a,b) => {
    return a + b;
};
console.log(add2(2 ,2));

// 화살표 함수 const name = () => return생략가능
// add3라는 함수는 a,b인자를 받아서 a+b를 더한값을 리턴하는 함수
add3 = (a,b) => a + b;
console.log(add3(3 ,2));

// 생성자 함수 const object = new Function(); //뒤 객체편에서다룸

// IIFE(Immedicately-Invoked Function Expressions)
// 함수를 정의해서 바로 호출하고 싶을때 아래처럼사용
(function run() {
    console.log('🤑');
})();