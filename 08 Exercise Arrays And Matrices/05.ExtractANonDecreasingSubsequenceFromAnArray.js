function solution(array) {
    let result = [];

    if (array.length > 0) {
        result[0] = [array[0]];
    }

    for (let i = 1; i < array.length; i++) {
        if (array[i] >= result[result.length - 1]) {
            result.push(array[i]);
        }
    }

    return result.join('\n').trim();
}

console.log(solution([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));