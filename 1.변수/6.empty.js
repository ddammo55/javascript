// 텅텅비어있는 데이터
// null, undefined

// 변수를 생성하고 아무값도 넣어주지 않으면
// undefined
let variable;
console.log(variable);

// 데이터가 없다고 명시해줄 수 있다.
variable = null;
console.log(variable);

//아직 활성화된 아이템이 있는지 없는지 모르는 상태!
let activeItem; 

//활성화된 아이템이 없는 상태!
activeItem = null;


console.log(typeof null); //object
console.log(typeof undefined); //undefined