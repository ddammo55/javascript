// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = "hello";
//text = "hi"; 이렇게 하면 에러뜸

// 1.상수
const MAX_FRUITS = 5; //최대사과개수

// 2.재할당 불가능한 상수변수 또는 변수
const apple = {
    name : "apple",
    color : "red",
    display : "🍇"
}
// apple = {};
console.log(apple);

// 애플의 이름이 오렌지로 변경되었다.
apple.name = 'orange';
console.log(apple);
