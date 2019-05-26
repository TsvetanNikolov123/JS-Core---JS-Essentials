function solution(array) {
    return array.filter((e, index) => index % 2 === 0).join(' ');
}

console.log(solution(['20', '30', '40']));
console.log(solution(['5', '10']));