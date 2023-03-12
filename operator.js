console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1+2}`);

function printAll(...args) {
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}

printAll('dream', 'coding', 'ellie');