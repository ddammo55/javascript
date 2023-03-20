// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);
a++; // a = a + 1;
console.log(a);

a--; // a = a - 1;
console.log(a);

console.clear();
//주의! 사항
// 앞에 사용하느냐 뒤에 사용하느냐 다르게 작동한다.
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
let b = a++; //a=0인값을 b변수에 먼저넣고 1로 증가됨
console.log(b);
console.log(a);