function solution(firstNumber, secondNumber) {
    if ((typeof firstNumber !== 'number') || (typeof secondNumber !== 'number')) {
        return false;
    }

    let x = Math.abs(firstNumber);
    let y = Math.abs(secondNumber);

    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }

    return x;
}

console.log(solution(15, 5));
console.log(solution(2154, 458));
