function solution(array) {
    let firstNumber = Number(array[0]);
    let lastNumber = Number(array[array.length - 1]);

    return firstNumber + lastNumber;
}

console.log(solution(['20', '20', '40']));