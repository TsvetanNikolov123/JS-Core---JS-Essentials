function solution(input) {
    let object = {};

    for (let i = 0; i < input.length; i += 2) {
        object[input[i]] = Number(input[i + 1]);
    }

    return object;
}

console.log(solution(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]));
