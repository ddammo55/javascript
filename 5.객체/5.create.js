// // apple 객체를 선언합니다.
// const apple = {
//     // name 속성을 선언하고 'apple' 값을 할당합니다.
//     name : 'apple',
//     // display 메서드를 선언합니다.
//     display: function () {
//         // this 키워드를 사용하여 현재 객체의 name 속성에 접근하고, 이모지와 함께 출력합니다.
//         console.log(`${this.name}:😄`);
//     }
// }

// const orange = {
//     name : 'orange',
//     display: function () {
//         console.log(`${this.name}:🍊`);
//     }
// }

//생성자 함수
function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`)
    };
    //return this; //생략가능
}
const apple = new Fruit('apple','🍇');
const orange = new Fruit('orange','🍊');
console.log(apple);
console.log(orange);