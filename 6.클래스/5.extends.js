// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }

//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔다');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }

//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔다');
//     }

//     play() {
//         console.log('놀자~');
//     }
// }

class Animal {
    constructor(color) {
       this.color = color;
    }

    eat() {
        console.log('부모 먹자!');
    }
    sleep() {
        console.log('부모 잔다');
    }
}

//Animal을 상속한다.
class Tiger extends Animal {}

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

//강아지
class Dog extends Animal {
    constructor(color, ownerName){
        super(color);  //Dog가 상속하고 있는 Animal부모생성자의 컬러를 말함
        this.ownerName = ownerName;
    }
    play() {
        console.log('자식 놀자아~!');
    }

    // 오버라이딩 overriding
    // 부모의행동을 내행동으로 덮어씌운다.
    eat() {
        super.eat();
        console.log('자식 강아지가 먹는다!');
    }
}

const dog = new Dog('파랑이', '원호');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();