// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기
// 클래스로 만들기

class Counter {
    #value;
    constructor(startValue) {
        if(isNaN(startValue) || startValue < 0){ //초기값이 숫자가 아니거나 0보다 작으면 0을 대입한다.
            this.#value = 0;
        }else{
            this.#value = startValue; //1
        }
    }
    get value() {
        return this.#value;
    }
    increment = () => {
       this.#value++; 
    }
}


const counter = new Counter(1);
counter.increment(); //1
counter.increment(); //2
console.log(counter.value);
