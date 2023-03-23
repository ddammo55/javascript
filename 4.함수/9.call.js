let add = (a,b) => a + b;
let multiply = (a,b) => a * b;

function calculator(a, b, action) {
    let result = action(a, b);
    console.log(result);
}


console.log(add(1,2));
calculator(5,5,multiply);