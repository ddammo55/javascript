//단항연산자 Unary Operators
// +(양)
// -(음)
// !(부정)
let a = 5;
a = -a;  //a변수 -1 * -5를 곱한다.
console.log(a);
console.log(-a); // -5 * -5 = 5

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음
console.clear();
console.log(+false); //0
console.log(+null); //0
console.log(+''); //0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN
