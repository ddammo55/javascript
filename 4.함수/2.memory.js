function add(a, b) {
    return a + b;
}
const sum = add;

// 함수add와 변수sum의 메모리주소는 같다.
console.log(sum(1, 2));
console.log(add(1, 2));