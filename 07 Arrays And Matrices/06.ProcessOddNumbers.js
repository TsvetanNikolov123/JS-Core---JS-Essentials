function solution(array) {
    return array
        .filter((e, index) => index % 2 !== 0)
        .reverse()
        .map(e => e * 2)
        .join(' ');
}

console.log(solution([10, 15, 20, 25]));