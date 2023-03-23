// 오브젝트 만드는 3가지 방법
// Object literal { key : value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)
let apple = {
    name : 'apple',
    'hello-by' : '😄',
    0 : 1,
    ['hello-bye1'] : '👍',
};

// 속성, 데이터에 접근하기 위해서는 
console.log(apple.name);  //마침표 표기법 dot notation
console.log(apple['name']); //대괄호를 사용해서 표기
console.log(apple["hello-by"]); //대괄호 표기법 bracket notation
console.log(apple[0]);
console.log(apple["hello-bye1"]);

// 속성추가
apple.emoji = '😡';
console.log(apple.emoji);

// 속성삭제
delete apple.emoji;
console.log(apple);