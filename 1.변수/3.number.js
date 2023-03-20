//정수
let integer = 123; 

//음수
let negative = -123;

//실수
let double = 1.23;

//출력
console.log(`${integer} \n ${negative} \n ${double}`);

let binary = 0b1111011; //2진수
let octal = 0o173; //8진수
let hex = 0x7b; //16진수

//출력
console.log(`binary:${binary} \noctal:${octal} \nhex:${hex}`);

console.log(0 / 123); //0
console.log(123 / 0); //Infinity

//큰 숫자일때는 n을 붙여준다
let bigInt = 1234567890122334456771233454556n;
console.log(bigInt)