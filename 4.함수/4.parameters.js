// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments객체에 저장됨
// 매개변수에 기본값을 add(a = 1, b = 1)을 넣을 수 있음
// 매개변수에 있을때는 매개변수값을 대입해주고 
// 없을때는 Default값이 삽입된다.
function add(a = 1, b = 1) {
    console.log(a);
    console.log(b);
    console.log(arguments[0]);//첫번째인자출력
    return a + b;
}
add();

// Rest 매개변수 Rest Parameters
// 얼마나 많은 배열의 인자가 들어갈지 모를때
// 모든인자를 배열로 받고 싶을때 
function sum(a=1,b=1, ...numbers){
    console.log(a);
    console.log(b);
    console.log(numbers);
}
sum(1,2,3,4,5,6,7,8,9,10);