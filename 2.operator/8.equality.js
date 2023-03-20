//동등 비교 관계 연산자(Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2); //true
console.log(2 != 2); //false
console.log(2 != 3); //true
console.log(2 == 3); //false
console.log(2 == '2'); //true
console.log(2 === '2'); //false 
console.log(true == 1); //true
console.log(true === 1); //false
console.log(false == 0); //true
console.log(false === 0); //false
console.clear();

const obj1 = {
    name : 'js',
};

const obj2 = {
    name : 'js',
};

console.log(obj1 == obj2); //false 메모리주소값이 다르기 때문에
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2;
console.log(obj2 == obj3); //true 주소값이 같기 때문에