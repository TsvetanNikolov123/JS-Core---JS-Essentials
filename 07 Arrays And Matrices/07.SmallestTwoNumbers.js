function solution(array) {
    return array.sort((a, b) => a - b).slice(0, 2).join(' ');
}

console.log(solution([30, 15, 50, 5]));