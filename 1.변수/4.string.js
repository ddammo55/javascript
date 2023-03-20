//문자열타입
let string = '안녕하세요';

// ``백틱사용가능
string = `안녕`;
console.log(string);

stringDa = "'안녕'";
console.log(string);

//템플릿 리터럴 (Template Literal) ``
let id = '하나씨'
let greetings = "'안녕!," + id + "🖐\n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'안녕!,${id}🤘
즐거운 하루 보내요!'`;
console.log(greetings);