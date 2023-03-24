// Fruit 클래스 생성
class Fruit {
    static MAX_FRUITS = 4;
  // 생성자 함수
  constructor(name, emoji) {
    this.name = name; // 과일 이름
    this.emoji = emoji; // 과일 색상
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🖐');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`이 과일은 ${this.emoji}색이며, 이름은 ${this.name}입니다.`);
  }
}

// 클래스레벨의 함수는 클래스이름으로 접근이가능하다.
// static를 붙이면 클래스 레벨의 메서드를 만들수 있다.
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);


// 인스턴스레벨의 프러퍼티와 함수는 만들어진 인스턴스를 통해서 접근가능
const apple = new Fruit('apple', '🍇');
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);