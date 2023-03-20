// typeof:데이터 타입을 확인
// 값을 타입 문자열로 반환
// 자바스크립트는 동적으로 할당된 값에 따라 타입이 결정됨!
// c나 자바는 Int variable = 0;  애초에 정적으로 타입이 결정됨!

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123;
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function() {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

