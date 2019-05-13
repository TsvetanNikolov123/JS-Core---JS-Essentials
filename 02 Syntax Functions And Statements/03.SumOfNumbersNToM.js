function solution(n, m) {
    let startNumber = Number(n);
    let endNumber = Number(m);

    let result = 0;

    for (let i = startNumber; i <= endNumber; i++) {
        result += i;
    }

    return result;
}

console.log(solution('1', '5'));