// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; 
b = 2;
console.log(a);
console.log(b);

//객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {  //0x1234주소값
    name : '사과',
}

let orange = apple; //0x1234주소값이 복사되어전달됨
orange.name = '오렌지'; //사과에서 오렌지로 바뀜
console.log(apple);
console.log(orange);