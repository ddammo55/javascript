// 객체 : 복합데이터 {key:value} value:원시타입과, 객체사용가능

let name = 'apple';
let color = 'red';
let display = '🍇';
let orangeName = 'orange';

let apple = {
    name : 'apple',
    color : 'red',
    display : '🍇'
}
//객체를 불러보자
console.log(apple);

//객체의 속성을 불러오자
console.log(apple.color);
console.log(apple.display);

let orange = {
    name : "orange",
    color : "yellow",
    display : "🍊"
}

console.log(orange);
console.log(orange.name);
console.log(orange.display);
console.log(orange.color);