//객체축약버전
const x = 0;
const y = 0;
const coordinate = { x, y }; //{x:x, y:y} 키와값이 같으면 생략가능
console.log(coordinate);

//
function makeObj(name, age) {
    return {
        name, //name : name
        age // age : age
    }
}