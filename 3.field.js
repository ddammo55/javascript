// 접근제어자 - 캡슐화
// private(#), public(기본), protected 자바스크립트()
class Fruit {
    #name;
    #emoji;
    #type = '과일';
  constructor(name, emoji) {
    this.#name = name; // 과일 이름
    this.#emoji = emoji; // 과일 색상
  }

  display = () => {
    console.log(`이 과일은 ${this.emoji}색이며, 이름은 ${this.name}입니다.`);
  }
}


const apple = new Fruit('apple', '🍇');
apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함
console.log(apple);
