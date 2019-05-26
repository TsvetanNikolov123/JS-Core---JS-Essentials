function solution(matrix) {
    let rowMax = [];
    for (let i = 0; i < matrix.length; i++) {
        rowMax.push(Math.max(...matrix[i]));
    }

    return Math.max(Math.max(...rowMax));
}

console.log(solution([
    [20, 50, 10],
    [8, 33, 145]]
));