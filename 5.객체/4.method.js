// this는 자기자신(apple객체)의 속성값을 사용할때
// display는 키 : 값=메서드
// apple 객체 생성
const apple = {
    // name 속성에 'apple' 할당
    name : 'apple',
    // display 메소드 정의
    display : function() {
        // name 속성과 🍊 문자열을 출력하는 로그
        console.log(`${this.name}: 🍊`);
    },
};

// apple 객체의 display 메소드 호출
apple.display();


