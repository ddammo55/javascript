let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

//활용예
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isActivated);

console.clear();
// Falshy 거짓인 값
// !!느낌표 두개를 붙이면 true or false로 변환해준다.
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);